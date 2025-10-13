import * as htmlToImage from "html-to-image";
import numeral from 'numeral';

import { hmacSha256, hexToBytes, base64Encode } from "./crypto.utils";
import { RELAYS_LOCALSTORAGE_KEY } from "./constants";

export async function getDataURLFromHTMLDOM(
  domElement: HTMLElement
): Promise<string> {
  // ? Sometimes images are not properly rendered in Safari - https://github.com/bubkoo/html-to-image/issues/361
  await htmlToImage.toPng(domElement);
  await htmlToImage.toPng(domElement);
  await htmlToImage.toPng(domElement);
  await htmlToImage.toPng(domElement);
  await htmlToImage.toPng(domElement);
  return htmlToImage.toPng(domElement);
}

export function downloadImage(fileName: string, dataURL: string) {
  const anchor = document.createElement("a");
  anchor.href = dataURL;
  anchor.download = fileName;

  anchor.click();
}

export function copyDataURL(dataURL: string) {
    const blob = dataURLToBlob(dataURL);
    const clipboardItem = new ClipboardItem({ 'image/png': blob });
    return navigator.clipboard.write([clipboardItem]);
}

export function dataURLToBlob(dataUrl: string) {
  const parts = dataUrl.split(",");
  const mime = 'image/png';
  const bstr = atob(parts[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr], { type: mime });
}

export interface ImgProxySettings {
  url: string;
  key: string;
  salt: string;
}

// Referenced and modified from https://git.v0l.io/Kieran/snort/src/commit/5a8bbdc60bdce7689efebb5af4bfa95141c406c6/packages/app/src/Hooks/useImgProxy.ts#L21
export function proxyImg(url: string, settings: ImgProxySettings, resize?: number, sha256?: string) {
  const te = new TextEncoder();

  function urlSafe(s: string) {
    return s.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }

  function signUrl(u: string) {
    const result = hmacSha256(
      hexToBytes(settings?.key),
      hexToBytes(settings?.salt),
      te.encode(u),
    );
    return urlSafe(base64Encode(result));
  }

  if (!settings) return url;

  if (url.startsWith("data:") || url.startsWith("blob:") || url.length == 0) return url;

  const opts = [];

  if (sha256) {
    opts.push(`hs:sha256:${sha256}`);
  }

  if (resize) {
    opts.push(`rs:fit:${resize}:${resize}`);
    opts.push(`dpr:${window.devicePixelRatio}`);
  }

  const urlBytes = te.encode(url);
  const urlEncoded = urlSafe(base64Encode(urlBytes));
  const path = `/${opts.join("/")}/${urlEncoded}`;
  const sig = signUrl(path);
  return `${new URL(settings.url).toString()}${sig}${path}`;
}

export function toReadableStatsFormat(number: number ) {
  return numeral(number).format('0.0a').replace('.0', '');
}

export function getRelaysFromLocalStorage(): string[] | null {
  const existingRelays = localStorage.getItem(RELAYS_LOCALSTORAGE_KEY);

  if(existingRelays !== null) {
    return(JSON.parse(existingRelays));
  }

  return null;
}

export function setRelaysInLocalStorage(relays: string[]) {
  localStorage.setItem(RELAYS_LOCALSTORAGE_KEY, JSON.stringify(relays));
}

export function getBreakpoint() {
  const width = window.innerWidth;
  
  if (width <= 425) {
    return 'small';
  } else if (width > 425 && width <= 900) {
    return 'medium';
  } else {
    return 'large';
  }
}

export function isSafari() {
  return (window as any).safari !== undefined;
}

// Not going with any kinda router, because this is all we need here
export function getNoteIDFromURL() {
  const fragments = window.location.pathname.split('/');

  if(fragments.length === 0) {
    return null;
  }

  return fragments[1];
}

export function updateNoteIDInTheURL(noteID: string) {
  history.pushState({ path: noteID }, noteID, `/${noteID}`);
}
