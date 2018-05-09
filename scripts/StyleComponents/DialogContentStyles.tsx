/* eslint-disable */

import * as React from 'react';
import styled from "styled-components";

export const PrimaryDialogButton = styled.div.attrs({
    className: props => props.provider ? 'provider-button-primary no-bottom-space' : 'button-primary no-bottom-space'
}) `
    flex:1;
    min-height: 0.75rem;
    min-width: 150px;
    display: inline-block;
    text-align: center;
    font-family: 'Prompt', sans-serif;
` as React.ComponentClass<{ provider: boolean, style: any, disabled: boolean, onClick: () => void }>;

export const SecondaryDialogButton = styled.div.attrs({
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
export const DialogHeader = styled.h2.attrs({ className: 'text-center' }) `
    font-family: 'Prompt', sans-serif;
    color: black;
`;
export const LableDialog = styled.label.attrs({
    className: 'MSG-Lable'
}) ``;
export const ContentDialog = styled.p.attrs({
    className: 'MSG-Lable'
}) `
    font-size: ${props => props.fontsize ? `${props.fontsize}px` : '17px'};
`;

export const DefaultParagraph = styled.p.attrs() `
    font-family: 'Prompt', sans-serif;
    font-size: ${props => props.fontsize ? `${props.fontsize}px` : '17px'};
    color: ${props => props.fontColor ? `${props.fontColor}` : 'black'};
`;
export const ListDialogItem = styled.div.attrs({ className: 'text-center' }) `
    font-family: 'Prompt', sans-serif;
`;