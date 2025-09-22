import { useRef } from "react";

import { SearchIcon } from "../Icon/Icon";
import { SearchBarContainer, SearchBarForm, SearchBarProgress, SearchBarProgressContainer, SearchBarWrapper, SearchInput } from "./SearchBar.styled";
import { useSearchInput } from "./hooks/use-search-input";
import { ErrorText, HelperText } from "../../shared/Global.styled";

export function SearchBar() {
    const inputRef = useRef<HTMLInputElement>(null);

    const {
        helperMessage,
        isLoading,
        isAnimate,
        onInputBlur,
        onInputChange,
        onInputFocus,
        onPaste,
        onSubmit,
    } = useSearchInput(inputRef);

    if(inputRef.current && isLoading) {
        inputRef.current.blur();
    }

    return (
        <SearchBarWrapper className={isAnimate ? 'shake': ''}>
            <SearchBarContainer>
                <SearchIcon />

                <SearchBarForm
                    onSubmit={onSubmit}
                >
                    <SearchInput
                        type="text"
                        placeholder="Paste nostr event id, primal, damus, iris or snort link here"
                        autoComplete="off"
                        ref={inputRef}
                        onChange={onInputChange}
                        onPaste={onPaste}
                        onBlur={onInputBlur}
                        onFocus={onInputFocus}
                        autoFocus
                    />
                    {
                        isLoading
                        ? (
                            <SearchBarProgressContainer>
                                <SearchBarProgress />
                            </SearchBarProgressContainer>
                          )
                        : null
                    }
                    
                </SearchBarForm>
            </SearchBarContainer>

            {
                helperMessage.message && helperMessage.type === 'error'
                ? <ErrorText>{helperMessage.message}</ErrorText>
                : <HelperText>{helperMessage.message}</HelperText>
            }
        </SearchBarWrapper>
    );
}
