"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dialog_1 = require("material-ui/Dialog");
const colors_1 = require("material-ui/styles/colors");
const SvgIcon_1 = require("material-ui/SvgIcon");
const React = require("react");
const WordingInfo_1 = require("../../Localized/WordingInfo");
const DialogContentStyles_1 = require("../../StyleComponents/DialogContentStyles");
const UxUtils_1 = require("../../UxUtils");
class FollowUpSuccessDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        };
    }
    render() {
        const { isLocal, isProvider, onClose } = this.props;
        const imgStyle = { width: "128", height: "128" };
        return (<Dialog_1.default contentStyle={{ maxWidth: UxUtils_1.getDialogWidth() }} titleStyle={{ fontWeight: "bold", textAlign: "center" }} bodyStyle={{ textAlign: "center" }} actionsContainerStyle={{ padding: 0 }} actions={[
            <DialogContentStyles_1.PrimaryDialogButton provider={isProvider} style={{ width: "100%", textAlign: "center" }} onClick={() => {
                this.setState({ open: false });
                onClose();
            }}>
                        {WordingInfo_1.WordingInfo.Close[isLocal]}
                    </DialogContentStyles_1.PrimaryDialogButton>,
        ]} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }}>
                <div>
                    <SvgIcon_1.default style={{ color: colors_1.grey500, width: 96, height: 96 }}>
                        <svg>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                    </SvgIcon_1.default>
                    <DialogContentStyles_1.DialogHeader>
                        {WordingInfo_1.WordingInfo.Success[isLocal]}
                    </DialogContentStyles_1.DialogHeader>
                    <DialogContentStyles_1.ContentDialog fontsize={UxUtils_1.getFontSize()}>
                        {WordingInfo_1.Loc.FeedbackSuccess[isLocal]}
                    </DialogContentStyles_1.ContentDialog>
                </div>
            </Dialog_1.default>);
    }
}
exports.FollowUpSuccessDialog = FollowUpSuccessDialog;
