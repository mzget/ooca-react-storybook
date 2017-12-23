"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.PrimaryDialogButton = styled_components_1.default.div.attrs({
    className: props => props.provider ? 'provider-button-primary no-bottom-space' : 'button-primary no-bottom-space'
}) `
    flex:1;
    min-height: 0.75rem;
    min-width: 150px;
    display: inline-block;
    text-align: center;
    font-family: 'Prompt', sans-serif;
`;
exports.SecondaryDialogButton = styled_components_1.default.div.attrs({
    className: 'bottom-space-micro'
}) `
    flex:1;
    min-height: 0.75rem;
    min-width: 150px;
    display: inline-block;
    text-align: center;
    font-family: 'Prompt', sans-serif;
    color: #0057b8;
`;
exports.DialogHeader = styled_components_1.default.h2.attrs({ className: 'text-center' }) `
    font-family: 'Prompt', sans-serif;
    color: black;
`;
exports.LableDialog = styled_components_1.default.label.attrs({
    className: 'MSG-Lable'
}) ``;
exports.ContentDialog = styled_components_1.default.p.attrs({
    className: 'MSG-Lable'
}) `
    font-size: ${props => props.fontsize ? `${props.fontsize}px` : '17px'};
`;
exports.ListDialogItem = styled_components_1.default.div.attrs({ className: 'text-center' }) `
    font-family: 'Prompt', sans-serif;
`;
