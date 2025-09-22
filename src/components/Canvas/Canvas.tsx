import { forwardRef, useRef } from "react";

import dayjs from "dayjs";

import { NostrichHead, VerificationCheck } from "../Icon/Icon";
import {
  AuthorInfo,
  AuthorName,
  AuthorNameAndNip05Container,
  AuthorNameContainer,
  AuthorNip05,
  BackgroundGradient,
  CanvasContainer,
  CardBlurShadow,
  CardContainer,
  CardContent,
  CardContentContainer,
  CardHeader,
  CardWrapper,
  InnerGradient,
  NostrBrand,
  NostrName,
  ResizeKnob,
  ResizeKnobContainer,
  ResizeKnobPosition,
  ResizeKnobs,
  StatItem,
  TweetContent,
  TweetStats,
  TweetTimestamp,
  VerificationCheckContainer,
  VerificationIconContainer,
} from "./Canvas.styled";
import useResizable from "../../hooks/use-resizable";
import { defaultImgProxy, NostrNote } from "../../shared/constants";
import { proxyImg, toReadableStatsFormat } from "../../shared/utils";
import { AuthorAvatar } from "./components/AuthorAvatar/AuthorAvatar";

export type CanvasProps = {
  noteHTML: string,
  note: NostrNote,
  showResponse: boolean,
  gradient: string,
  nostrBrandingColor: string,
  isLoading: boolean,
};

export const Canvas = forwardRef<HTMLDivElement, CanvasProps>(({
  noteHTML,
  note,
  showResponse,
  gradient,
  nostrBrandingColor,
  isLoading,
}, ref) => {
  const cardWrapperRef = useRef<HTMLDivElement>(null);
  const leftResizeKnob = useRef<HTMLDivElement>(null);
  const rightResizeKnob = useRef<HTMLDivElement>(null);
  const bottomResizeKnob = useRef<HTMLDivElement>(null);

  const { width, height } = useResizable({
    cardWrapperRef,
    leftResizeKnob,
    rightResizeKnob,
    bottomResizeKnob,
    initialWidth: 650,
    initialHeight: 325,
  });

  return (
    <CanvasContainer>
      <CardWrapper
        ref={cardWrapperRef}
        style={{
          width,
        }}
      >
        <ResizeKnobs>
            <ResizeKnobContainer ref={leftResizeKnob} $position={ResizeKnobPosition.left}>
                <ResizeKnob></ResizeKnob>
            </ResizeKnobContainer>

            <ResizeKnobContainer ref={rightResizeKnob} $position={ResizeKnobPosition.right}>
                <ResizeKnob></ResizeKnob>
            </ResizeKnobContainer>

            <ResizeKnobContainer ref={bottomResizeKnob} $position={ResizeKnobPosition.bottom}>
                <ResizeKnob></ResizeKnob>
            </ResizeKnobContainer>
        </ResizeKnobs>
        <CardContainer ref={ref}>
          <CardContent>
            <BackgroundGradient $gradient={gradient} />
            <div
              style={{width: "100%", position: "relative" }}
            >
              <CardBlurShadow
                width={width}
                height={height}
                $gradient={gradient}
              />
              <CardContentContainer>
                <InnerGradient />
                <CardHeader>
                  <AuthorInfo>
                    <AuthorAvatar isLoading={isLoading} src={proxyImg(note.author?.image || '', defaultImgProxy)} alt="Image of the Nostr note author" />
                    <AuthorNameAndNip05Container>
                      <AuthorNameContainer>
                          <AuthorName isLoading={isLoading}>{note.author?.name}</AuthorName>
                          <VerificationCheckContainer>
                              <VerificationIconContainer>
                                  <VerificationCheck />
                              </VerificationIconContainer>
                          </VerificationCheckContainer> 
                      </AuthorNameContainer>
                      <AuthorNip05 isLoading={isLoading}>{note.author?.nip05}</AuthorNip05>
                    </AuthorNameAndNip05Container>
                  </AuthorInfo>

                  <NostrBrand>
                    <NostrichHead fill={nostrBrandingColor} />
                    <NostrName $color={nostrBrandingColor}>Nostr</NostrName>
                  </NostrBrand>
                </CardHeader>

                <TweetContent isLoading={isLoading} dangerouslySetInnerHTML={{
                  __html: noteHTML,
                }} />
                <TweetTimestamp isLoading={isLoading}>{dayjs(note.createdAt * 1000).format('hh:mm A')} · {dayjs(note.createdAt * 1000).format('DD MMM, YYYY')}</TweetTimestamp>
                {
                  !showResponse
                  ? null
                  : (
                    <TweetStats>
                      <StatItem isLoading={isLoading}>
                        <span>{toReadableStatsFormat(note.replies)}</span> <span>replies</span>
                      </StatItem>
                      <StatItem isLoading={isLoading}>
                        <span>{toReadableStatsFormat(note.zaps)}</span> <span>zaps</span>
                      </StatItem>
                      <StatItem isLoading={isLoading}>
                        <span>{toReadableStatsFormat(note.likes)}</span> <span>likes</span>
                      </StatItem>
                      <StatItem isLoading={isLoading}>
                        <span>{toReadableStatsFormat(note.reposts)}</span> <span>reposts</span>
                      </StatItem>
                    </TweetStats>
                  )
                }
              </CardContentContainer>
            </div>
          </CardContent>
        </CardContainer>
      </CardWrapper>
    </CanvasContainer>
  );
})
