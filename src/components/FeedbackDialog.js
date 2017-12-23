"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Dialog_1 = require("material-ui/Dialog");
const DialogContentStyles_1 = require("../StyleComponents/DialogContentStyles");
const UxUtils_1 = require("../UxUtils");
const AppUtils_1 = require("../AppUtils");
const Styles_1 = require("../StyleComponents/Styles");
const WordingInfo_1 = require("../Localized/WordingInfo");
const MessageInfo_1 = require("../Localized/MessageInfo");
class FeedbackDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }
    render() {
        const { _isLocal, _isProvider, SendFeedback, handMSGState } = this.props;
        return (<Dialog_1.default contentStyle={{ maxWidth: UxUtils_1.getDialogWidth() }} bodyStyle={{ textAlign: 'center' }} actionsContainerStyle={{ padding: 0 }} actions={[
            <div>
            <DialogContentStyles_1.SecondaryDialogButton style={{ width: '100%' }} onClick={() => {
                SendFeedback();
                handMSGState(AppUtils_1.MSGSteate.SendMSG);
                this.setState({ open: false });
            }}>
              {WordingInfo_1.WordingInfo.Skip[_isLocal]}
            </DialogContentStyles_1.SecondaryDialogButton>
            <DialogContentStyles_1.PrimaryDialogButton provider={_isProvider} style={{ width: '100%' }} onClick={() => {
                SendFeedback();
                handMSGState(AppUtils_1.MSGSteate.SendMSG);
                this.setState({ open: false });
            }}>
              {WordingInfo_1.WordingInfo.Submit[_isLocal]}
            </DialogContentStyles_1.PrimaryDialogButton>
          </div>
        ]} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }}>
        <div>
          <DialogContentStyles_1.DialogHeader>
            {MessageInfo_1.MSGSteateInfo.Feedback[_isLocal]}
          </DialogContentStyles_1.DialogHeader>
          <div style={{ textAlign: "left" }}>
            <Styles_1.TextArea placeholder={WordingInfo_1.WordingInfo.Recommend[_isLocal]} onChange={(e) => {
            MessageInfo_1.FeedbackInfo.feedback = e.target.value;
        }}/>
          </div>
        </div>
      </Dialog_1.default>);
    }
}
exports.FeedbackDialog = FeedbackDialog;
