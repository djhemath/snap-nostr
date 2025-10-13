import { useRef, useState } from "react";

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Canvas } from "../components/Canvas/Canvas";
// import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Toolbar } from "../components/Toolbar/Toolbar";
import { HomePageContainer, MainSection, NoteNotFoundContainer, Spacer } from "./HomePage.styled";
import { copyDataURL, downloadImage, getDataURLFromHTMLDOM } from "../shared/utils";
import { useNoteContext } from "../contexts/note.context";
import { GRADIENT, GRADIENTS, initialGradient, NOSTR_BRANDING_COLORS } from "../shared/constants";
import { trackEvent } from "../shared/mixpanel.util";
import { SadComputer } from "../components/Icon/Icon";

function HomePage() {
  const canvasCardRef = useRef<HTMLDivElement>(null);
  const [ showResponse, setShowResponse ] = useState(true);
  const [ selectedGradient, setSelectedGradient ] = useState<GRADIENT>(initialGradient);
  const [ isDownloading, setIsDownloading ] = useState(false);
  const [ isCopying, setIsCopying ] = useState(false);

  const { note, isLoading, isError } = useNoteContext();

  function onDownload() {
    setIsDownloading(true);
    const cardEl = canvasCardRef.current;

    if (cardEl) {
      getDataURLFromHTMLDOM(cardEl).then((dataURL) =>
        downloadImage("nostr-note", dataURL)
      ).finally(() => {
        setIsDownloading(false);
        toast.success('Image Downloaded!');
        trackEvent("IMAGE_DOWNLOADED", note.postId);
      });
    }
  }

  function onCopy() {
    const cardEl = canvasCardRef.current;

    if (cardEl) {
      setIsCopying(true);
      getDataURLFromHTMLDOM(cardEl).then(copyDataURL).finally(() => {
        setIsCopying(false);
        toast.success('Image copied!');
        trackEvent("IMAGE_COPIED", note.postId);
      });
    }
  }

  return (
    <HomePageContainer>
      <Header/>

      <MainSection>
        <Toolbar
          onDownload={onDownload}
          onCopy={onCopy}
          showResponse={showResponse}
          onChangeShowResponse={(val: boolean) => setShowResponse(val)}
          gradient={selectedGradient}
          onGradientChange={(gradient: GRADIENT) => setSelectedGradient(gradient)}
          isDownloading={isDownloading}
          isCopying={isCopying}
        />

        <Spacer />

        <ToastContainer
          position="bottom-left"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />

        {
          isError
          ?
            (
              <NoteNotFoundContainer>
                <div>
                  <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
                    <SadComputer />
                    <h1>Oh snap!</h1>
                  </div>
                  <h3>The note is not found or invalid. Please double-check the note ID.</h3>
                </div>
              </NoteNotFoundContainer>
            )
          :
            (
              <Canvas
                ref={canvasCardRef}
                noteHTML={note.html}
                note={note}
                showResponse={showResponse}
                gradient={GRADIENTS[selectedGradient]}
                nostrBrandingColor={NOSTR_BRANDING_COLORS[selectedGradient]}
                isLoading={isLoading}
              />
            )
        }
      </MainSection>

      {/* <Footer /> */}
    </HomePageContainer>
  );
}

export default HomePage;
