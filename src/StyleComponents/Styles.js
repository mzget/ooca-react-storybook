"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
exports.PrimaryButton = styled_components_1.default.button.attrs({
    className: 'button'
}) `
    background-color: #0478d7; 
    color: white;
    min-width: 150px;
`;
exports.Header = styled_components_1.default.h2.attrs({ className: 'text-center' }) ``;
exports.PaddingBox = styled_components_1.default.div.attrs({ className: 'App-MessageBox' }) `
    overflow-x: hidden;
    padding: 20px 10px 20px 10px;
`;
exports.Panel = styled_components_1.default.div.attrs({ className: 'panel' }) ``;
exports.TextArea = styled_components_1.default.textarea.attrs({ cols: 30, rows: 4, className: 'textarea full-width bottom-space' }) `outline: none; -webkit-tap-highlight-color:transparent; font-size: 0.9rem;`;
