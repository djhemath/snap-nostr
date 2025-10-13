import { SyntheticEvent, useEffect, useState } from "react";
import { validateAndGetMatchedNostrEventBech32OrRaw } from "../../../shared/nostr.util";
import { useNostrEvent } from "../../../hooks/use-nostr-event";
import { useShakeAnimation } from "../../../hooks/use-shake-animation";
import { getNoteIDFromURL, updateNoteIDInTheURL } from "../../../shared/utils";
import { useNoteContext } from "../../../contexts/note.context";
import { initialNote } from "../../../shared/constants";

export type HelperMessage = {
    type: 'error' | 'info';
    message: string;
}

const pressEnterToFindNote = 'Press Enter to find note';

export function useSearchInput(
    inputRef: React.RefObject<HTMLInputElement>,
) {
    const [ bech32OrRawId, setBech32OrRawId ] = useState('');
    const [ helperMessage, setHelperMessage ] = useState<HelperMessage>({
        type: 'info',
        message: ''
    });

    const { isError, isLoading } = useNostrEvent(bech32OrRawId);
    const { setIsError, setNote } = useNoteContext()

    const { isAnimate, addShakeAnimation } = useShakeAnimation(isError);

    useEffect(() => {
        const handleLocationChange = () => {
            const _bech32OrRawId = getNoteIDFromURL();

            if (_bech32OrRawId) {
                if (inputRef.current) {
                    inputRef.current.value = _bech32OrRawId;
                }
                onText(_bech32OrRawId, false);
            } else {
                if (inputRef.current) {
                    inputRef.current.value = '';
                }
                setBech32OrRawId('')
                setNote(initialNote);
            }
        };

        handleLocationChange();

        // Listen for back/forward navigation
        window.addEventListener("popstate", handleLocationChange);

        return () => {
            window.removeEventListener("popstate", handleLocationChange);
        };
    }, []);

    useEffect(() => {
        if(isLoading) {
            setHelperMessage({
                type: 'info',
                message: '',
            });
        }
    }, [isLoading]);

    useEffect(() => {
        if(isError) {
            setHelperMessage({
                type: 'error',
                message: 'Something went wrong, please check the pasted ID or URL!',
            });
        }
    },[isError]);

    function onText(inputValue: string, updateHistory = true) {
        setIsError(false);
        const bech32OrRaw = validateAndGetMatchedNostrEventBech32OrRaw(inputValue);

        if(!bech32OrRaw) {
            addShakeAnimation();

            setIsError(true);
            setHelperMessage({
                type: 'error',
                message: 'Invalid note ID or invalid URL!',
            });
        } else {
            setBech32OrRawId(bech32OrRaw);

            if(updateHistory) {
                updateNoteIDInTheURL(bech32OrRaw);
            }
        }
    }

    function onSubmit(e: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
        e.preventDefault();
        const inputValue = (e.currentTarget[0] as HTMLInputElement).value;
        onText(inputValue);
    }

    function onPaste(e: React.ClipboardEvent<HTMLInputElement>) {
        // Not sure why it's not working outside the setTimeout
        setTimeout(() => {
            const inputValue = (e.target as HTMLInputElement).value;
            onText(inputValue);
        });
    }

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {

        if(e.target.value === '') {
            setHelperMessage({
                type: 'info',
                message: '',
            });
        } else {
            if(helperMessage.message !== pressEnterToFindNote && !isLoading) {
                setHelperMessage({
                    type: 'info',
                    message: pressEnterToFindNote,
                });
            }
        }
    }

    function onInputBlur() {
        if(helperMessage.type !== 'error') {
            setHelperMessage({
                type: 'info',
                message: '',
            });
        }
    }

    function onInputFocus(e: React.FocusEvent) {
        if(helperMessage.message === '' && (e.target as HTMLInputElement).value !== '' && !isLoading) {
            setHelperMessage({
                type: 'info',
                message: pressEnterToFindNote,
            });
        }
    }

    return {
        helperMessage,
        isAnimate,
        isLoading,
        onSubmit,
        onPaste,
        onInputChange,
        onInputBlur,
        onInputFocus,
        bech32OrRawId,
    };
}
