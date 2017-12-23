"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Dialog_1 = require("material-ui/Dialog");
const UxUtils_1 = require("../UxUtils");
const DialogContentStyles_1 = require("../StyleComponents/DialogContentStyles");
const MessageInfo_1 = require("../Localized/MessageInfo");
const WordingInfo_1 = require("../Localized/WordingInfo");
class ThankyouDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
        this.getButton = this.getButton.bind(this);
    }
    getButton() {
        const { isLocal, isProvider, handCallBack, handleClose } = this.props;
        let buttons = [
            <div style={{ display: 'flex' }}>
                <DialogContentStyles_1.PrimaryDialogButton provider={isProvider} style={{ width: '100%', textAlign: 'center' }} onClick={() => {
                this.setState({ open: false });
                handleClose();
            }}>
                    {WordingInfo_1.WordingInfo.Continue[isLocal]}
                </DialogContentStyles_1.PrimaryDialogButton>
                

            </div>
        ];
        return buttons;
    }
    render() {
        const { isLocal, isProvider, handCallBack, handleClose } = this.props;
        return (<Dialog_1.default contentStyle={{ maxWidth: UxUtils_1.getDialogWidth() }} bodyStyle={{ textAlign: 'center' }} actionsContainerStyle={{ padding: 0 }} actions={this.getButton()} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }}>
                <div style={{ paddingTop: '20px', marginBottom: '30px' }}>
                    <DialogContentStyles_1.ContentDialog fontsize={17}>
                        {MessageInfo_1.MSGSteateInfo.Thank[isLocal]}
                    </DialogContentStyles_1.ContentDialog>
                </div>
            </Dialog_1.default>);
    }
}
exports.ThankyouDialog = ThankyouDialog;
