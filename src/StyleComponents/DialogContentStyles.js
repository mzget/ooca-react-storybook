/* eslint-disable */
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
`;
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
`;
export const LableDialog = styled.label.attrs({
    className: 'MSG-Lable'
}) ``;
export const ContentDialog = styled.p.attrs({
    className: 'MSG-Lable'
}) ``;
export const ListDialogItem = styled.div.attrs({ className: 'text-center' }) `
    font-family: 'Prompt', sans-serif;
    font-size: 14px;
`;
