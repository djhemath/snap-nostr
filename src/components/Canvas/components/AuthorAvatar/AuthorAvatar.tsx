import { Nostrich } from "../../../Icon/Icon";
import { AuthorImage, AuthorImageSkeleton, NostrichContainer } from "./AuthorAvatar.styled";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  isLoading?: boolean;
};

export const AuthorAvatar = ({ isLoading, ...props }: Props) => {
  if (isLoading) {
    return <AuthorImageSkeleton />;
  }

  if(!Boolean(props.src)) {
    return (
      <NostrichContainer>
        <Nostrich />
      </NostrichContainer>
    );
  }

  return <AuthorImage {...props} />;
};