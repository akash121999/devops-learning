import getFontSize from "@/utils/getFontSize";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const getBackgroundColor = (theme) => {
    if (theme === "dark") {
        return "var(--background-disabled-button-dark)";
    } else {
        return "var(--background-disabled-button-light)";
    }
};
const getDisableButtonFontColor = (theme) => {
    if (theme === "dark") {
        return "var(--text-disabled-dark)";
    } else {
        return "var(--text-disabled-button-light)";
    }
};

const StyledButton = styled(Button)`
    ${({ backgroundColor }) => `background-color: ${backgroundColor};`}
    font-size: ${({ size }) => getFontSize(size) || "1rem"};
    text-transform: capitalize;
    &:disabled {
        background-color: ${({ theme }) => getBackgroundColor(theme.mode)};
        color: ${({ theme }) => getDisableButtonFontColor(theme.mode)};
    }
`;
export default StyledButton;
