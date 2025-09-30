import styled from "styled-components";
import { GradientPickerStyled } from "../GradientPicker/GradientPicker.styled";
import { tablet } from "../../shared/Global.styled";

export const ToolbarContainer = styled.ul`
    width: 100px;
    height: max-content;
    border-radius: 8px;
    background-color: #272727;
    padding: 20px 5px 10px 5px;
    margin: none;
    list-style-type: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    position: fixed;
    top: 50vh;
    transform: translateY(-25vh);

    ${tablet(`
        flex-direction: row;
        width: 90%;
        padding: 10px;
        margin: 0;
        justify-content: space-between;
        gap: 0px;

        position: absolute;
        top: 350px;

        & hr {
            width: 1px;
            height: 40px;
            margin: 0;
        }
    `)}
`;

export const ToolbarListItem = styled.li`
    width: 100%;

    ${tablet(`
        width: auto !important;
    `)}
`

export const Tool = styled.button<{$withBackground?: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    width: 90%;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.1s;
    -webkit-transition: background-color 0.1s;
    border: none;
    position: relative;

    background: ${props => props.$withBackground ? 'linear-gradient(45deg, #CE66FF, #FE983B)': 'transparent' };

    & span {
        color: ${props => props.$withBackground ? '#FFF': '#9F9F9F'};
        font-weight: ${props => props.$withBackground ? '600': 'normal'};;
    }

    &:hover {
        background-color: #323131;
    }

    &:hover ${GradientPickerStyled} {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(-100%);
        -webkit-transform: translateY(-100%);
    }

    &:active svg, &:active > div {
        transform: scale(0.8);
        -webkit-transform: scale(0.8);
    }

    & svg {
        ${tablet(`
            width: 20px !important;
            height: 20px !important;
        `)}
    }

    ${tablet(`
        width: auto;
    `)}
`;

export const ToolName = styled.span`
    color: #9F9F9F;
    font-size: 12px;
`;

export const ColorTool = styled.div<{$gradient: string}>`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${props => props.$gradient};
    box-shadow: rgba(255, 255, 255, 0.7) 0px 0px 0px 2px, rgba(0, 0, 0, 0.5) 0px 3px 6px;

    ${tablet(`
        width: 20px;
        height: 20px;
    `)}
`;

export const RelaysToolContainer = styled.div`
    position: relative;
    width: 100%;

    ${tablet(`
        width: auto;
    `)}
`;
