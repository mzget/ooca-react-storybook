
/* eslint-disable */

import styled from 'styled-components';

export const PrimaryButton = styled.button.attrs({
    className: 'button'
}) `
background-color: #0478d7; 
color: white;
min-width: 150px;
`;

export const PaddingBox = styled.div.attrs({ className: 'App-MessageBox' }) `
overflow-x: hidden;
padding: 20px 10px 20px 10px;
`;

export const TextArea = styled.textarea.attrs(
    { cols: 30, rows: 4, className: 'textarea full-width bottom-space' }
) `outline: none; -webkit-tap-highlight-color:transparent; margin-top: 10px; font-size: 0.9rem;`;