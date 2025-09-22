import { AuthorImage, AuthorImageSkeleton } from "./AuthorAvatar.styled";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  isLoading?: boolean;
};

export const AuthorAvatar = ({ isLoading, ...props }: Props) => {
  if (isLoading) {
    return <AuthorImageSkeleton />;
  }
  return <AuthorImage {...props} />;
};