import styled from "styled-components";

export const AuthorImage = styled.img`
  width: 3em;
  height: 3em;
  margin-right: 0.75em;
  object-fit: cover;
  border-radius: 50%;
`;

export const AuthorImageSkeleton = styled.div`
  width: 3em;
  height: 3em;
  margin-right: 0.75em;
  border-radius: 50%;
  background: linear-gradient(
    90deg,
    #e9eef3 25%,
    #f6f8fa 37%,
    #e9eef3 63%
  );
  background-size: 400% 100%;
  animation: shimmer 1.8s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;