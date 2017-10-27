import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import { PrimaryDialogButton, SecondaryDialogButton, DialogHeader } from '../StyleComponents/DialogContentStyles';
import { MSGSteate } from '../AppUtils';
import { TextArea } from '../StyleComponents/Styles';
import { WordingInfo } from '../Localized/WordingInfo';
import { MSGSteateInfo, FeedbackInfo } from '../Localized/MessageInfo';
export class FeedbackDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }
    render() {
        const { _isLocal, _isProvider, SendFeedback, handMSGState } = this.props;
        return (<Dialog contentStyle={{ maxWidth: '500px', minWidth: '400px' }} bodyStyle={{ textAlign: 'center' }} actionsContainerStyle={{ padding: 0 }} actions={[
            <div>
              <SecondaryDialogButton style={{ width: '100%' }} onClick={() => {
                SendFeedback();
                handMSGState(MSGSteate.SendMSG);
                this.setState({ open: false });
            }}>
                {WordingInfo.Skip[_isLocal]}
              </SecondaryDialogButton>
              <PrimaryDialogButton provider={_isProvider} style={{ width: '100%' }} onClick={() => {
                SendFeedback();
                handMSGState(MSGSteate.SendMSG);
                this.setState({ open: false });
            }}>
                {WordingInfo.Submit[_isLocal]}
              </PrimaryDialogButton>
            </div>
        ]} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }}>
          <div>
            <DialogHeader>
              {MSGSteateInfo.Feedback[_isLocal]}
            </DialogHeader>
            <div style={{ textAlign: "left" }}>
              <TextArea placeholder={WordingInfo.Recommend[_isLocal]} onChange={(e) => {
            FeedbackInfo.feedback = e.target.value;
        }}/>
            </div>
          </div>
        </Dialog>);
    }
}
