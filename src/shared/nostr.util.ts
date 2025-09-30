import NDK, { NDKKind, NDKTag } from "@nostr-dev-kit/ndk";
import { nip19, nip21 } from "nostr-tools";
import { ProfilePointer } from "nostr-tools/nip19";
import { defaultImgProxy, MILLISATS_PER_SAT } from "./constants";
import { proxyImg } from "./utils";
import { decode } from "light-bolt11-decoder";

export function removeNewLineCharactersAtTheEnd(str: string) {
  return str.replace(/\n+$/, "\n"); // yet keeps exactly one \n at the end
}

export async function parseText(text: string) {
  const ndk = new NDK({
    explicitRelayUrls: [
      "wss://relay.damus.io",
      "wss://nostr.wine",
      "wss://relay.nostr.net",
      "wss://nos.lol",
      "wss://nostr-pub.wellorder.net",
      "wss://njump.me",
      "wss://relay.primal.net",
    ],
  });

  await ndk.connect();

  let textContent = text;

  const nostrURISchemaMatches = textContent.matchAll(
    new RegExp(nip21.NOSTR_URI_REGEX, "g")
  );

  for (let match of nostrURISchemaMatches) {
    const parsedNostrURI = nip21.parse(match[0]);
    const decordedData = parsedNostrURI.decoded.data;

    let pubkey = "";
    if (typeof decordedData === "string") {
      pubkey = decordedData;
    } else {
      pubkey = (decordedData as ProfilePointer).pubkey;
    }

    const user = await ndk.getUser({ pubkey: pubkey }).fetchProfile();
    const name = user?.displayName || user?.name || "";

    textContent = textContent.replace(
      match[0],
      `<a>@${name}</a>`
    );
  }

  const hashtagRegex = /(^|\s)(#[a-z\d-]+)/ig;

  textContent = textContent.replace(hashtagRegex, "$1<a>$2</a>")

  const regex = /(https:\/\/(?!njump\.me)[\w.-]+(?:\.[\w.-]+)+(?:\/[^\s]*)?)/g;
  const matches = textContent.match(regex);
  const result: any[] = [];

  if (matches) {
    let lastIndex = 0;
    for (const match of matches) {
      const startIndex = textContent.indexOf(match, lastIndex);
      const endIndex = startIndex + match.length;

      if (startIndex > lastIndex) {
        const text = textContent.substring(lastIndex, startIndex);

        if(text !== '\n') {
          result.push({
            type: "text",
            value: removeNewLineCharactersAtTheEnd(text),
          });
        }
      }

      const url = new URL(match);
      let type;

      if (
        url.pathname.endsWith(".jpg") ||
        url.pathname.endsWith(".jpeg") ||
        url.pathname.endsWith(".png")
      ) {
        type = "image";
      } else if (url.pathname.endsWith(".gif")) {
        type = "gif";
      } else if (
        url.pathname.endsWith(".mp4") ||
        url.pathname.endsWith(".mov") ||
        url.pathname.endsWith(".webm")
      ) {
        type = "video";
      } else {
        type = "link";
      }

      result.push({ type, value: match });

      lastIndex = endIndex;
    }

    if (lastIndex < textContent.length) {
      const text = textContent.substring(lastIndex);
      if(text !== '\n') {
        result.push({ type: "text", value: removeNewLineCharactersAtTheEnd(text) });
      }
    }
  } else {
    if(textContent !== '\n') {
      result.push({ type: "text", value: removeNewLineCharactersAtTheEnd(textContent) });
    }
  }

  return result;
}

// TODO: Fix types
export function getHTML(content: any[]) {
  const html: string[] = [];
  let mediaCount = 0;
  let textBuffer = "";

  for (const item of content) {
    if (item.type === "text") {
      textBuffer += item.value;
    } else {
      if (textBuffer) {
        html.push(
          `<span class="text-content">${textBuffer.replace(
            /\n/g,
            "<br />"
          )}</span>`
        );
        textBuffer = "";
      }

      switch (item.type) {
        case "image":
          html.push(`<img style="border-radius: 6px" width="100%" src="${proxyImg(item.value, defaultImgProxy)}" alt="Image embeded in the nostr note">`);
          mediaCount++;
          break;
        case "gif":
          html.push(`<img style="border-radius: 6px" width="100%" src="${proxyImg(item.value, defaultImgProxy)}" alt="GIF embeded in the nostr note">`);
          mediaCount++;
          break;
        case "video":
          html.push(
            `<video style="border-radius: 6px" width="100%" src="${item.value}" alt="video embeded in the nostr note"></video>`
          );
          mediaCount++;
          break;
        case "link":
          html.push(`<a href="${item.value}">${item.value}</a>`);
          break;
      }
    }
  }

  if (textBuffer) {
    html.push(
      `<span class="text-content">${textBuffer.replace(/\n/g, "<br />")}</span>`
    );
  }

  if (mediaCount > 1) {
    const mediaItems: string[] = [];

    for (let i = 0; i < html.length; i++) {
      const item = html[i];
      if (item.startsWith("<img") || item.startsWith("<video")) {

        mediaItems.push(item);

        html.splice(i, 1);
        i--;
      }
    }

    html.push(
      `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
          ${mediaItems.reduce((prev, curr) => prev + curr, '')}
        </div>
      `
    )
  }

  const styles = `
    <style>
      a {
        color: #ca077c;
      }
    </style>
  `;

  return styles + html.join("");
}

export function getNip19Bech32RegexMatch(text: string) {
  return text.match(nip19.BECH32_REGEX);
}

export function getHexRegexMatch(text: string) {
  return text.match(/^[0-9a-f]{64}$/);
}

export function validateAndGetMatchedNostrEventBech32OrRaw(text: string) {
  if(!text) return false;

  let bech32 = ''

  if(text.startsWith('http') || text.startsWith('https')) {
    const fragments = text.split('/');
    
    for(let i=0; i<fragments.length; i++) {
      const fragment = fragments[i];
      const match = getNip19Bech32RegexMatch(fragment);

      if(match !== null) {
        bech32 = match[0];
      }
    }

  } else if(text.startsWith("nostr:")) {
    const nip19Text = text.substring(6);

    const match = getNip19Bech32RegexMatch(nip19Text);

    if(match !== null) {
      bech32 = match[0];
    }
  } else {
    // Raw event ID
    if(text.length === 64 && getHexRegexMatch(text)) {
      bech32 = text;
      return bech32;
    }

    const match = getNip19Bech32RegexMatch(text);

    if(match !== null) {
      bech32 = match[0];
    }
  }

  if(bech32 === '') {
    return false;
  }

  try {
    const result = nip19.decode(bech32)
    
    if(result.type === 'nevent' || result.type === 'note') {
      return bech32;
    }

    return false;
  } catch(err) {
    return false;
  }
}

export async function getPostDetails(ndk: NDK, noteId: string) {
  const post = await ndk.fetchEvent(noteId);
  if(!post) {
    throw new Error('Invalid post');
  }
  const author = await post?.author.fetchProfile();
  const stats = await getPostStats(ndk, post?.id || '');

  return {
    post,
    author,
    stats,
  }
}

export async function getPostStats(ndk: NDK, postId: string) {
  const timeNow = Math.floor(Date.now() / 1000);
  const reposts = await ndk.fetchEvents({
    kinds: [NDKKind.Repost],
    '#e': [postId || ''],
    until: timeNow,
  });

  // Only take the count of direct reposts
  const repostsCount = Array.from(reposts).filter(repost => {
    const pTagCounts = repost.tags.filter((tag: NDKTag) => tag[0] === 'p').length;

    return pTagCounts === 1;
  }).length;

  const likes = await ndk.fetchEvents({
    kinds: [NDKKind.Reaction],
    '#e': [postId || ''],
    until: timeNow,
  });

  const zaps = await ndk.fetchEvents({
    kinds: [NDKKind.Zap],
    '#e': [postId || ''],
    until: timeNow,
  });

  const zapAmount = Array.from(zaps).reduce((prev, curr) => {
    const bolt11Tag = curr.getMatchingTags('bolt11');

    if(
      !bolt11Tag ||
      !Array.isArray(bolt11Tag) ||
      bolt11Tag.length === 0 ||
      !bolt11Tag[0] ||
      !Array.isArray(bolt11Tag[0]) ||
      (bolt11Tag[0] as string[]).length === 0
    ) {
      return prev;
    }

    const bolt11 = bolt11Tag[0][1];

    const decodedbol11 = decode(bolt11);

    const amountSection = decodedbol11.sections.find(section => section.name === 'amount');

    if(amountSection) {
      const millisats = Number(amountSection.value);

      return prev + millisats;
    }

    return prev;
  }, 0);

  const replies = await ndk.fetchEvents({
    kinds: [NDKKind.Text],
    '#e': [postId || ''],
    until: timeNow,
  });

  // Only take the direct replies
  // https://github.com/nostr-protocol/nips/blob/master/10.md#positional-e-tags-deprecated
  const replyCount = Array.from(replies).filter(reply => {
    const eTagsCount = reply.tags.filter((tag: NDKTag) => tag[0] === 'e').length;

    return eTagsCount === 1;
  }).length;

  return {
    likes: likes.size,
    reposts: repostsCount,
    zaps: zapAmount / MILLISATS_PER_SAT,
    replies: replyCount,
  };
}
