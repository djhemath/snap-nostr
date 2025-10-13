import { Content, LoadingContent } from "./TweetContent.styled";

export type TweetContentProps = {
    isLoading: boolean;
    noteHTML: string | TrustedHTML;
};

export function TweetContent({
    isLoading = true,
    noteHTML = '',
}: TweetContentProps) {
    if(isLoading) {
        return (
            <LoadingContent isLoading={isLoading} />
        );
    }

    return (
        <Content
            dangerouslySetInnerHTML={{
                __html: noteHTML,
            }}
        />
    );
}