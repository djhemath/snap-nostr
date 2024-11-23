import { useEffect, useRef, useState } from "react";
import { Bitcoin, Github, HeartIcon2, Mail, QuestionMark } from "../Icon/Icon";
import { HelpAnchor, HelpButtonContainer, HelpContainer, HelpItem, StyledHelpButton } from "./HelpButton.styled";

const HELP_ITEMS = [
    {
        id: 1,
        text: "What's this?",
        icon: <QuestionMark />,
        link: '/about',
    },
    {
        id: 2,
        text: "What's Nostr?",
        icon: <QuestionMark />,
        link: 'https://nostr.com',
    },
    {
        id: 3,
        text: "Not working?",
        icon: <QuestionMark />,
        link: '/not-working',
    },
    {
        id: 4,
        text: "Credits",
        icon: <HeartIcon2 />,
        link: '/credits',
    },
    {
        id: 5,
        text: "Feedback",
        icon: <Mail />,
        link: '/feedback',
    },
    {
        id: 6,
        text: "Donate",
        icon: <Bitcoin />,
        link: '/donate',
    },
    {
        id: 7,
        text: "Github",
        icon: <Github />,
        link: 'https://github.com/djhemath/snap-nostr',
    },
];

export function HelpButton() {
    const [ isOpen, setIsOpen ] = useState(false);
    const helpContainerRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if(helpContainerRef.current && !helpContainerRef.current.contains(e.target as Node)) {
                if(buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
                    setIsOpen(false);
                }
            }
        }

        document.addEventListener('click', (e) => handleClick(e));

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);

    const onHelpItemClick = () => {
        setIsOpen(false);
    }

    return (
        <HelpButtonContainer>
            <StyledHelpButton
                aria-label="Help button"
                ref={buttonRef}
                onClick={() => setIsOpen(prev => !prev)}
                className="rammetto-one-regular">
                ?
            </StyledHelpButton>

            <HelpContainer
                ref={helpContainerRef}
                style={{
                    transform: isOpen ? 'translateY(0)': '',
                    opacity: isOpen ? 1: 0,
                    zIndex: isOpen ? 1: -1,
                }}
            >
                {
                    HELP_ITEMS.map(item => (
                        <HelpItem onClick={() => onHelpItemClick()} key={item.id}>
                            <HelpAnchor
                                href={item.link}
                                target="_blank"
                            >
                                {item.icon}
                                <span>{item.text}</span>
                            </HelpAnchor>
                        </HelpItem>
                    ))
                }
            </HelpContainer>
            
        </HelpButtonContainer>
    );
}