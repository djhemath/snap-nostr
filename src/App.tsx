import { lazy, useEffect, useState } from "react";
import { NoteContext } from "./contexts/note.context";
import { DEFAULT_RELAYS, initialNote, NostrNote } from "./shared/constants";
import { RelaysContext } from "./contexts/relays.context";
import { getRelaysFromLocalStorage, setRelaysInLocalStorage } from "./shared/utils";
import { trackEvent } from "./shared/mixpanel.util";

const HomePage = lazy(() => import('./pages/Home.page'));

const existingRelays = getRelaysFromLocalStorage();

function App() {
  const [ note, setNote ] = useState<NostrNote>(initialNote);
  const [ isNoteLoading, setIsNoteLoading ] = useState<boolean>(false);
  const [ isError, setIsError ] = useState<boolean>(false);
  const [ relays, setRelays ] = useState<string[]>(existingRelays && existingRelays.length > 0 ? existingRelays : DEFAULT_RELAYS);

  useEffect(() => {
    trackEvent("IMAGE_GENERATED", note.postId);
  }, [note])

  return (
    <RelaysContext.Provider value={{
      relays,
      setRelays: (relays: string[]) => {
        setRelaysInLocalStorage(relays);
        setRelays(relays);
      },
    }}>
      <NoteContext.Provider value={{
        note,
        setNote,
        isLoading: isNoteLoading,
        setNoteLoading: setIsNoteLoading,
        isError,
        setIsError: setIsError,
      }}>
        <HomePage />
      </NoteContext.Provider>
    </RelaysContext.Provider>
  );
}

export default App
