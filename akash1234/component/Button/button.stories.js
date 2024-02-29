import React from "react";

import Button from ".";

const ButtonSB = {
    title: "UI/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

const Template = ({ children, ...args }) => <Button {...args}>{children}</Button>;

export const Text = Template.bind({});
Text.args = {
    variant: "text",
    color: "primary",
    children: "Button",
};

export const Contained = Template.bind({});
Contained.args = {
    variant: "contained",
    color: "primary",
    children: "Button",
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: "outlined",
    color: "primary",
    children: "Button",
};

export const Success = Template.bind({});
Success.args = {
    variant: "contained",
    color: "success",
    children: "Button",
};

export const Error = Template.bind({});
Error.args = {
    variant: "contained",
    color: "error",
    children: "Button",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    variant: "contained",
    color: "primary",
    children: "Button",
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    variant: "contained",
    color: "secondary",
    children: "Button",
};

export default ButtonSB;
