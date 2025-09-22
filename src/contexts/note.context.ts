import { createContext, useContext } from "react";
import { initialNote, NostrNote } from "../shared/constants";

const setNote = (_note: NostrNote) => {}
const setNoteLoading = (_isLoading: boolean) => {}

export const NoteContext = createContext({
    note: initialNote,
    setNote,
    isLoading: true,
    setNoteLoading,
});

export function useNoteContext() {
  return useContext(NoteContext);
}