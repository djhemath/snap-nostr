import styled from "styled-components";
import { SkeletonProps, skeletonStyle } from "../../Canvas.styled";

export const Content = styled.div`
  font-size: 1.4em;
  line-height: 1.5;
  margin-bottom: 1em;
  font-weight: 500;
  word-break: break-word;
  pointer-events: none;
  color: #111;
  min-width: auto;
  min-height: auto;
`;

export const LoadingContent = styled.div<SkeletonProps>`
  font-size: 1.4em;
  line-height: 1.5;
  margin-bottom: 1em;
  font-weight: 500;
  word-break: break-word;
  pointer-events: none;
  color: #111;

  ${({ isLoading }) => isLoading && skeletonStyle}
  min-width: ${({ isLoading }) => (isLoading ? '200px' : 'auto')};
  min-height: ${({ isLoading }) => (isLoading ? '8em' : 'auto')};
`;