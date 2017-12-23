"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const React = require("react");
const Dialog_1 = require("material-ui/Dialog");
const UxUtils_1 = require("../UxUtils");
const DialogContentStyles_1 = require("../StyleComponents/DialogContentStyles");
const WordingInfo_1 = require("../Localized/WordingInfo");
class PleaseNoteDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }
    render() {
        const { _isLocal, isProvider, onClose } = this.props;
        const msgLabelFont = UxUtils_1.calcFontSize();
        return (<Dialog_1.default contentStyle={{ maxWidth: UxUtils_1.getDialogWidth() }} titleStyle={{ fontWeight: 'bold', textAlign: 'center' }} bodyStyle={{ textAlign: 'center' }} actionsContainerStyle={{ padding: 0 }} actions={[
            <DialogContentStyles_1.PrimaryDialogButton provider={isProvider} style={{ width: '100%', textAlign: 'center' }} onClick={() => {
                this.setState({ open: false });
                onClose();
            }}>
                        {WordingInfo_1.WordingInfo.Close[_isLocal]}
                    </DialogContentStyles_1.PrimaryDialogButton>,
        ]} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }}>
                <div>
                    <DialogContentStyles_1.DialogHeader>
                        {(isProvider == true)
            ? WordingInfo_1.ProviderLocalized.PleaseNote[_isLocal]
            : WordingInfo_1.Loc.PleaseNote[_isLocal]}
                    </DialogContentStyles_1.DialogHeader>
                    <DialogContentStyles_1.ContentDialog fontsize={UxUtils_1.getFontSize()}>
                        {(isProvider == true) ?
            WordingInfo_1.ProviderLocalized.PleaseNoteDetail[_isLocal] :
            WordingInfo_1.Loc.PleaseNoteDetail[_isLocal]}
                    </DialogContentStyles_1.ContentDialog>
                </div>
            </Dialog_1.default>);
    }
}
exports.PleaseNoteDialog = PleaseNoteDialog;
