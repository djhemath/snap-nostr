import { createContext, useContext } from "react";
import { initialNote, NostrNote } from "../shared/constants";

const setNote = (_note: NostrNote) => {}
const setNoteLoading = (_isLoading: boolean) => {}
const setIsError = (_isLoading: boolean) => {}

export const NoteContext = createContext({
    note: initialNote,
    setNote,
    isLoading: true,
    setNoteLoading,
    isError: false,
    setIsError,
});

export function useNoteContext() {
  return useContext(NoteContext);
}