import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { defaultMuiTheme } from './MaterialUtils';
import Dialog from 'material-ui/Dialog';
import { BottomButtonDialog } from './DialogContent';

import { MSGSteate } from '../AppUtils';
import { TextArea } from '../StyleComponents/Styles';

import { WordingInfo } from '../Localized/WordingInfo';
import { MSGSteateInfo, options, FeedbackInfo } from '../Localized/MessageInfo';

export class FeedbackDialog extends React.Component<{
  _isLocal: string,
  _isProvider: boolean,
  SendFeedback: () => void,
  handMSGState: (state: string) => void
}, { open: boolean }> {
  constructor(props: any) {
    super(props);

    this.state = {
      open: true
    }
  }

  render() {
    const { _isLocal, _isProvider, SendFeedback, handMSGState } = this.props;

    return (
      <MuiThemeProvider muiTheme={defaultMuiTheme}>
        <Dialog
          contentStyle={{ maxWidth: '500px', minWidth: '400px' }}
          bodyStyle={{ textAlign: 'center', padding: 0 }}
          actionsContainerStyle={{ padding: 0 }}
          actions={[
          ]}
          modal={true}
          open={this.state.open}
          onRequestClose={() => { this.setState({ open: false }) }}
        >
          <BottomButtonDialog
            isProvider={_isProvider}
            header={MSGSteateInfo.Feedback[_isLocal]}
            content={<TextArea placeholder={WordingInfo.Recommend[_isLocal]}
              onChange={(e: any) => {
                FeedbackInfo.feedback = e.target.value;
              }} />}
            submitText={WordingInfo.Submit[_isLocal]}
            skipText={WordingInfo.Skip[_isLocal]}
            onSubmitClick={() => {
              SendFeedback();
              handMSGState(MSGSteate.SendMSG);
              this.setState({ open: false });
            }}
            onSkipClick={() => {
              SendFeedback();
              handMSGState(MSGSteate.SendMSG);
              this.setState({ open: false });
            }}
          />
        </Dialog>
      </MuiThemeProvider >
    );
  }
}