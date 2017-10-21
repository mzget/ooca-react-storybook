/* eslint-disable */

import * as React from 'react';
import { PaddingBox, Header, TextArea, Panel } from './ModalComps';
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
` as React.ComponentClass<{ provider: boolean, style: any, onClick: () => void }>;

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
    color: black;
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

/**
 * Draw content seperate from button in the bottom line.
 * @param {object} content element
 * @param {object} buttons element
 */
const BottomButtonDialogContent = (props) => {
    return (
        <div style={props.style}>
            <PaddingBox>
                {props.content}
            </PaddingBox>
            {props.buttons}
        </div>
    );
}
/**
 * Draw submit or skip content.
 * @param {string} header
 * @param {object} content element
 * @param {function} onSubmitClick
 * @param {function} onSkipClick
 * @param {string} submitText
 * @param {string} skipText 
 */
const BottomButtonDialog = (props) => {
    return (
        <BottomButtonDialogContent style={props.style}
            content={
                <div>
                    <Header className="no-bottom-space" style={props.headerStyle}>{props.header}</Header>
                    <Panel style={{ paddingBottom: 0 }}>
                        <div style={{ textAlign: "left" }}>
                            {props.content}
                        </div>
                    </Panel>
                </div>}
            buttons={<SubmitAndSkipButtons
                isProvider={props.isProvider}
                submitText={props.submitText} skipText={props.skipText}
                onSubmitClick={props.onSubmitClick} onSkipClick={props.onSkipClick}
            />}
        />
    );
};
/**
 * Bottom line submit or skip buttons
 * @param {function} onSubmitClick
 * @param {function} onSkipClick
 * @param {string} submitText
 * @param {string} skipText 
 */
const SubmitAndSkipButtons = (props) => {
    let btnClassNames = ["button-primary", "no-bottom-space", 'text-center'];
    let submitButton = (
        <PrimaryDialogButton
            style={{ width: '100%', minHeight: "0.75rem", display: "inline-block" }}
            onClick={props.onSubmitClick} >
            {props.submitText}
        </PrimaryDialogButton>
    );
    let rowClasses = ["row full-width", props.isProvider ? "provider" : ""].join(" ");
    return (
        // Small size (innerWidth<=768)
        <div>
            <SecondaryDialogButton
                onClick={props.onSkipClick} >
                <a>{props.skipText}</a>
            </SecondaryDialogButton>
            {submitButton}
        </div>


        // Larger size (innerWidth>768)
        // (<div style={{ display: 'flex' }}>
        //     {submitButton}
        //     <SecondaryDialogButton
        //         style={{ width: '100%', minHeight: "0.75rem", display: "inline-block" }}
        //         onClick={props.onSkipClick} >
        //         {props.skipText}
        //     </SecondaryDialogButton>
        // </div>);
    );
};

const ButtonLines = (props) => {
    let widthPerButton = 100.0 / props.buttons.length;
    let btnClasses = ["button-primary", "no-bottom-space"];
    return (
        <div className={["row full-width", props.isProvider ? "provider" : ""].join(" ")}
            style={{ display: 'flex' }}
        >
            {props.buttons.map((value, index) => {
                return (
                    <PrimaryDialogButton key={index} onClick={value.onClick}>
                        {value.text}
                        {/* <div key={index} className={btnClasses.join(" ")}
                            style={{flex:1, minHeight: "0.75rem", display: "inline-block", minWidth: "150px" }}
                            onClick={value.onClick} >
                            {value.text}
                        </div> */}
                    </PrimaryDialogButton>
                );
            })}
        </div>
    );
};

export { BottomButtonDialogContent, BottomButtonDialog, SubmitAndSkipButtons, ButtonLines };