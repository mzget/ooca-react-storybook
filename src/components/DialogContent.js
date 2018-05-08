/* eslint-disable */
import * as React from 'react';
import { PaddingBox, Header, Panel } from './ModalComps';
import { PrimaryDialogButton, SecondaryDialogButton } from '../StyleComponents/DialogContentStyles';
/**
 * Draw content seperate from button in the bottom line.
 * @param {object} content element
 * @param {object} buttons element
 */
const BottomButtonDialogContent = (props) => {
    return (<div style={props.style}>
            <PaddingBox>
                {props.content}
            </PaddingBox>
            {props.buttons}
        </div>);
};
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
    return (<BottomButtonDialogContent style={props.style} content={<div>
                    <Header className="no-bottom-space" style={props.headerStyle}>{props.header}</Header>
                    <Panel style={{ paddingBottom: 0 }}>
                        <div style={{ textAlign: "left" }}>
                            {props.content}
                        </div>
                    </Panel>
                </div>} buttons={<SubmitAndSkipButtons isProvider={props.isProvider} submitText={props.submitText} skipText={props.skipText} onSubmitClick={props.onSubmitClick} onSkipClick={props.onSkipClick}/>}/>);
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
    let submitButton = (<PrimaryDialogButton style={{ width: '100%', minHeight: "0.75rem", display: "inline-block" }} onClick={props.onSubmitClick}>
            {props.submitText}
        </PrimaryDialogButton>);
    let rowClasses = ["row full-width", props.isProvider ? "provider" : ""].join(" ");
    return (
    // Small size (innerWidth<=768)
    <div>
            <SecondaryDialogButton onClick={props.onSkipClick}>
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
    return (<div className={["row full-width", props.isProvider ? "provider" : ""].join(" ")} style={{ display: 'flex' }}>
            {props.buttons.map((value, index) => {
        return (<PrimaryDialogButton key={index} onClick={value.onClick}>
                        {value.text}
                        
                    </PrimaryDialogButton>);
    })}
        </div>);
};
export { BottomButtonDialogContent, BottomButtonDialog, SubmitAndSkipButtons, ButtonLines };
