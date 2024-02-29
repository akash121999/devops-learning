import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import StyledButton from "./button.styled";

/**
 * Button UI component for user interaction
 */
const Button = forwardRef(({ children, type, ...props }, ref) => {
    return (
        <StyledButton ref={ref} type={type} {...props} data-testid="button">
            {children}
        </StyledButton>
    );
});

Button.displayName = "Button";

Button.propTypes = {
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /**
     * Type of button
     */
    type: PropTypes.string,
    /**
     * What variant of button to use?
     */
    variant: PropTypes.oneOf(["text", "contained", "outlined"]),
    /**
     * MUI color prop
     */
    color: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf(["primary", "secondary", "success", "error", "warning"]),
    ]),
    /**
     * Button contents
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
};

Button.defaultProps = {
    onClick: undefined,
    size: "medium",
    type: "button",
    variant: "contained",
};

export default Button;
