import styled from "styled-components";
import { tablet } from "../../shared/Global.styled";

export const HelpButtonContainer = styled.div`
    position: relative;
`;

export const StyledHelpButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 36px;
    color: #FFF;
    width: 65px;
    height: 65px;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: rgba(39,39,40,1);
    }

    &:focus {
        outline: #CE66FF solid 2px;
    }

    ${tablet(`
        width: 36px;
        height: 36px;
        font-size: 24px;
    `)}
`;

export const HelpContainer = styled.ul`
    list-style-type: none;
    background-color: #272727;
    border: 1px solid #71717187;
    border-radius: 8px;
    box-shadow: 0 25px 40px 11px #00000040;
    padding: 10px;

    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 8px;

    position: absolute;
    right: 0px;
    top: 60px;

    transform: translateY(-5%);
    opacity: 0;
    z-index: -1;

    transition: transform 0.2s, opacity 0.4s, z-index 0.2s;
`;

export const HelpItem = styled.li`
    color: #FFF;
    transition: background-color 0.2s;
    border-radius: 8px;
    cursor: pointer;

    font-size: 14px;

    min-height: 45px;
    min-width: 200px;

    svg {
        width: 20px;
        height: 20px;
    }

    &:hover {
        background-color: #222222;
    }

    &:hover svg {
        width: 25px;
        height: 25px;
    }
`;

export const HelpAnchor = styled.a`
    padding: 10px;
    display: flex;
    gap: 12px;
    align-items: center;
    text-decoration: none;
    color: inherit;
`;
