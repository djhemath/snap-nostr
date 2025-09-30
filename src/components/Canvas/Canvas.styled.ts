import styled from "styled-components";
import { AbsoluteFull, tablet } from "../../shared/Global.styled";
import { isSafari } from "../../shared/utils";

export interface SkeletonProps {
  isLoading?: boolean;
}

export const skeletonStyle = `
  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.05) 25%,
    rgba(0, 0, 0, 0.1) 37%,
    rgba(0, 0, 0, 0.05) 63%
  );

  background-size: 200% 100%;
  border-radius: 4px;
  color: transparent;
  animation: shimmer 1.8s ease-in-out infinite;
`;

export const CanvasContainer = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  -webkit-user-select: none;

  ${tablet(`
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
  `)}
`;

export const CardWrapper = styled.div`
  position: relative;
  // width: 800px;
  // height: 460px;
`;

export const ResizeKnobs = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
`;

export enum ResizeKnobPosition { left, bottom, right };

export const ResizeKnobContainer = styled.div<{$position: ResizeKnobPosition}>`
    touch-action: none;
    -webkit-touch-callout: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2em;
    height: 2em;

    ${
        props => props.$position === ResizeKnobPosition.left
        ? `
            top: 50%;
            left: 0;
            transform: translateX(-50%) translateY(-50%);
            -webkit-transform: translateX(-50%) translateY(-50%);
            cursor: ew-resize;
        `
        : ''
    }

    ${
        props => props.$position === ResizeKnobPosition.right
        ? `
            top: 50%;
            right: 0;
            transform: translateX(50%) translateY(-50%);
            -webkit-transform: translateX(50%) translateY(-50%);
            cursor: ew-resize;
        `
        : ''
    }

    ${
        props => props.$position === ResizeKnobPosition.bottom
        ? `
            bottom: 0;
            left: 50%;
            transform: translateX(-50%) translateY(50%);
            -webkit-transform: translateX(-50%) translateY(50%);
            cursor: ns-resize;
        `
        : ''
    }

    position: absolute;
    pointer-events: auto;

    &:hover div {
      transform: scale(2.5);
      -webkit-transform: scale(2.5);
    }
`;

export const ResizeKnob = styled.div`
    transition-property: -webkit-transform, transform;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    -webkit-transition-property: -webkit-transform, transform;
    -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);
    -webkit-transition-duration: .15s;
    box-shadow: 0 0 #0000,0 0 #0000,0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);
    background-color: #FFF;
    border-radius: 50%;
    width: .375rem;
    height: .375rem;
`;

export const CardContainer = styled.div`
  box-shadow: 0 90px 150px -80px #0e0f1180, 0 40px 120px #000000b3;
  border-radius: 0.5rem;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  pointer-events: none;
`;

export const CardContent = styled.div`
  padding: 50px;
  font-size: 16px;
  perspective: 1000px;
  transition: background-color 0.15s cubic-bezier(.4,0,.2,1), 
              border-color 0.15s cubic-bezier(.4,0,.2,1), 
              color 0.15s cubic-bezier(.4,0,.2,1), 
              fill 0.15s cubic-bezier(.4,0,.2,1), 
              stroke 0.15s cubic-bezier(.4,0,.2,1);
  -webkit-transition: background-color 0.15s cubic-bezier(.4,0,.2,1), 
              border-color 0.15s cubic-bezier(.4,0,.2,1), 
              color 0.15s cubic-bezier(.4,0,.2,1), 
              fill 0.15s cubic-bezier(.4,0,.2,1), 
              stroke 0.15s cubic-bezier(.4,0,.2,1);
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`;

export const BackgroundGradient = styled.div<{$gradient: string}>`
  ${AbsoluteFull}
  background-image: ${props => props.$gradient};
  background-repeat: no-repeat;
`;

export const CardBlurShadow = styled.div<{width: number, height: number, $gradient: string}>`
  ${AbsoluteFull}
  background-image: ${props => props.$gradient};
  background-size: ${props => `${props.width}px ${props.height}px`};
  border-radius: 1em;
  z-index: 0;

  ${
    !isSafari()
    ? `
      &:before {
        position: absolute;
        content: "";
        left: 0;
        top: 3em;
        width: 100%;
        height: 100%;
        border-radius: 1em;
        background-color: #0000002e;
        transform: translateZ(-1px);
        -webkit-transform: translateZ(-1px);
        filter: blur(60px);
        -webkit-filter: blur(10px);
        z-index: -1;
      }

      &:after {
        position: absolute;
        content: "";
        left: 0;
        top: 3em;
        width: 100%;
        height: 100%;
        border-radius: 1em;
        background-color: #0000002e;
        transform: translateZ(-1px);
        -webkit-transform: translateZ(-1px);
        filter: blur(60px);
        -webkit-filter: blur(10px);: blur(60px);
        z-index: -1;
        filter: blur(20px);
        -webkit-filter: blur(10px);: blur(20px);
        left: 3%;
        right: 3%;
        width: initial;
        top: 1em;
      }
    `
    : ``
  }
`;

export const CardContentContainer = styled.div`
  position: relative;
  padding: 2em 2em 1.5em;
  width: 100%;
  height: 100%;
  border-radius: 1em;
  border: 1px solid;
  backdrop-filter: blur(18px) saturate(177%);
  -webkit-backdrop-filter: blur(18px) saturate(177%);
  transition: all 0.15s cubic-bezier(.4,0,.2,1);
  -webkit-transition: all 0.15s cubic-bezier(.4,0,.2,1);
`;

export const InnerGradient = styled.div`
  ${AbsoluteFull}
  background-image: linear-gradient(-50deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.95) 80%);
  box-shadow: inset 0 0 0 2px #ffffff26;
  border-radius: 1em;
  z-index: -1;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.75rem;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorNameAndNip05Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AuthorNameContainer = styled.div`
  display: flex;
  gap: 2px;
`;

export const AuthorName = styled.div<SkeletonProps>`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #111;
  white-space: nowrap;
  ${({ isLoading }) => isLoading && skeletonStyle}
  min-width: ${({ isLoading }) => (isLoading ? '100px' : 'auto')};
  min-height: ${({ isLoading }) => (isLoading ? '18px' : 'auto')};
`;

export const VerificationCheckContainer = styled.div`
  width: 20px;
  height: 20px;
`;

export const AuthorNip05 = styled.div<SkeletonProps>`
  font-weight: 400;
  font-size: 14px;
  display: flex;
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.2;
  white-space: nowrap;
  ${({ isLoading }) => isLoading && skeletonStyle}
  min-width: ${({ isLoading }) => (isLoading ? '80px' : 'auto')};
  min-height: ${({ isLoading }) => (isLoading ? '14px' : 'auto')};
`;

export const VerificationIconContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: 4px;
`;

export const NostrBrand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

export const NostrName = styled.span<{$color: string}>`
  font-weight: bold;
  font-size: 12px;
  color: ${props => props.$color};
`;

export const TweetTimestamp = styled.div<SkeletonProps>`
  color: rgba(0, 0, 0, 0.5);
  padding-bottom: 0.7em;
  font-weight: 500;

  ${({ isLoading }) => isLoading && skeletonStyle}
  ${({ isLoading }) => isLoading && `max-width: 40%; max-height: 26px`}
`;

export const TweetStats = styled.div`
  display: flex;
  gap: 1em;
`;

export const StatItem = styled.div<SkeletonProps>`
  color: rgba(0, 0, 0, 0.7);

  span:first-child {
    color: #111;
    font-weight: 600;
  }

  ${({ isLoading }) =>
    isLoading &&
    `
      display: flex;
      margin-top: 12px;
      gap: 4px;
      align-items: center;

      span:first-child {
        display: none;
      }

      span {
        ${skeletonStyle}
        width: 75px;
        min-height: 14px;
      }
    `}
`;