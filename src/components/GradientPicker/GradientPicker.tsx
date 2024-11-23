import { GRADIENT, GRADIENTS } from "../../shared/constants";
import { ToolbarProps } from "../Toolbar/Toolbar";
import { GradientPickerStyled, Gradient, GradientContainer, GradientName } from "./GradientPicker.styled";

export type GradientPickerProps = Pick<ToolbarProps, 'gradient' | 'onGradientChange'>;

export function GradientPicker({
    gradient,
    onGradientChange,
}: GradientPickerProps) {
    return (
        <GradientPickerStyled className="color-picker">
            {
                Object.keys(GRADIENTS).map((gradientKey) => (
                    <GradientContainer aria-label="Gradient buton" onClick={() => onGradientChange(gradientKey as GRADIENT)} key={gradientKey}>
                        <Gradient $background={GRADIENTS[gradientKey as GRADIENT]} $isSelected={gradient === gradientKey} />
                        <GradientName>{gradientKey}</GradientName>
                    </GradientContainer>
                ))
            }
        </GradientPickerStyled>
    );
}
