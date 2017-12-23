"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ModalComps_1 = require("./ModalComps");
const DialogContentStyles_1 = require("../StyleComponents/DialogContentStyles");
/**
 * Draw content seperate from button in the bottom line.
 * @param {object} content element
 * @param {object} buttons element
 */
const BottomButtonDialogContent = (props) => {
    return (<div style={props.style}>
            <ModalComps_1.PaddingBox>
                {props.content}
            </ModalComps_1.PaddingBox>
            {props.buttons}
        </div>);
};
exports.BottomButtonDialogContent = BottomButtonDialogContent;
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
                    <ModalComps_1.Header className="no-bottom-space" style={props.headerStyle}>{props.header}</ModalComps_1.Header>
                    <ModalComps_1.Panel style={{ paddingBottom: 0 }}>
                        <div style={{ textAlign: "left" }}>
                            {props.content}
                        </div>
                    </ModalComps_1.Panel>
                </div>} buttons={<SubmitAndSkipButtons isProvider={props.isProvider} submitText={props.submitText} skipText={props.skipText} onSubmitClick={props.onSubmitClick} onSkipClick={props.onSkipClick}/>}/>);
};
exports.BottomButtonDialog = BottomButtonDialog;
/**
 * Bottom line submit or skip buttons
 * @param {function} onSubmitClick
 * @param {function} onSkipClick
 * @param {string} submitText
 * @param {string} skipText
 */
const SubmitAndSkipButtons = (props) => {
    let btnClassNames = ["button-primary", "no-bottom-space", 'text-center'];
    let submitButton = (<DialogContentStyles_1.PrimaryDialogButton style={{ width: '100%', minHeight: "0.75rem", display: "inline-block" }} onClick={props.onSubmitClick}>
            {props.submitText}
        </DialogContentStyles_1.PrimaryDialogButton>);
    let rowClasses = ["row full-width", props.isProvider ? "provider" : ""].join(" ");
    return (
    // Small size (innerWidth<=768)
    <div>
            <DialogContentStyles_1.SecondaryDialogButton onClick={props.onSkipClick}>
                <a>{props.skipText}</a>
            </DialogContentStyles_1.SecondaryDialogButton>
            {submitButton}
        </div>);
};
exports.SubmitAndSkipButtons = SubmitAndSkipButtons;
const ButtonLines = (props) => {
    let widthPerButton = 100.0 / props.buttons.length;
    let btnClasses = ["button-primary", "no-bottom-space"];
    return (<div className={["row full-width", props.isProvider ? "provider" : ""].join(" ")} style={{ display: 'flex' }}>
            {props.buttons.map((value, index) => {
        return (<DialogContentStyles_1.PrimaryDialogButton key={index} onClick={value.onClick}>
                        {value.text}
                        
                    </DialogContentStyles_1.PrimaryDialogButton>);
    })}
        </div>);
};
exports.ButtonLines = ButtonLines;
