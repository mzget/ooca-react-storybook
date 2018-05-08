/* eslint-disable */
import * as React from 'react';
import styled from 'styled-components';

const PaddingBox = styled.div.attrs({ className: 'App-MessageBox' }) `
    overflow-x: hidden;
    padding: 20px 10px 20px 10px;
`;
const Header = styled.h2.attrs({ className: 'text-center' }) ``;
const Panel = styled.div.attrs({ className: 'panel' }) ``;
const TextArea = styled.textarea.attrs(
    { cols: 30, rows: 4, className: 'textarea full-width bottom-space' }
) `outline: none; -webkit-tap-highlight-color:transparent;`;
export { PaddingBox, Header, Panel, TextArea };