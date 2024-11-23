import styled from "styled-components";

export const GradientPickerStyled = styled.div`
    padding: 20px;

    position: absolute;
    left: 10px;
    top: 0px;

    background-color: #222;
    box-shadow: 0 0 15px #444;
    border: 1px solid #71717187;
    border-radius: 6px;

    transform: rotateX(25deg) translateY(-100%);
    -webkit-transform: rotateX(25deg) translateY(-100%);
    will-change: -webkit-transform, transform, opacity;
    transition-property: -webkit-transform, transform, opacity;
    transition-duration: 150ms;
    -webkit-transition-property: -webkit-transform, transform, opacity;
    -webkit-transition-duration: 150ms;
    opacity: 0;
    pointer-events: none;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    -webkit-transition-timing-function: cubic-bezier(.4,0,.2,1);

    display: flex;
    flex-wrap: wrap;
    gap: 15px;

    width: 300px;
`;

export const GradientContainer = styled.div`
    border: none;
    cursor: pointer;
    background: transparent;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;

    width: max-content;
`;

export const Gradient = styled.div<{$background: string, $isSelected: boolean}>`
    width: 40px;
    height: 40px;
    border-radius: 6px;
    background: ${(props) => props.$background};
    transition: box-shadow 0.1s;
    -webkit-transition: box-shadow 0.1s;
    position: relative;

     &::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        border: 2px solid transparent;
        transition: transform 0.4s ease, border-color 0.4s ease;
        -webkit-transition: transform 0.4s ease, border-color 0.4s ease;
        border-radius: 10px;
    }

    ${props => (
        props.$isSelected
        // ? 'outline: #CE66FF solid 2px; outline-offset: 2px;'
        ? `
            &::before {
                border-color: #CE66FF; 
                transform: scale(1); 
                -webkit-transform: scale(1); 
            }
        `
        : ''
    )}

    &:hover {
        box-shadow: 0 0 2px 4px #ffffff26;
    }

    &:active {
        transform: scale(0.9);
        -webkit-transform: scale(0.9);
    }
`;

export const GradientName = styled.small`
    color: #FFF;
`;
