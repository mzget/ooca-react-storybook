import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import { PaddingBox, TextArea } from "../StyleComponents/Styles";
import { PrimaryDialogButton, SecondaryDialogButton, DialogHeader, ListDialogItem } from './DialogContent';
import { WordingInfo } from '../Localized/WordingInfo';
import { MSGSteateInfo, options, FeedbackInfo } from '../Localized/MessageInfo';
import { MSGSteate } from '../AppUtils';
const InputRadio = (props) => {
    return (<div className="control">
            <label className="radio">
                <input type="radio" name={props.name} style={{ display: 'inline-block' }} value={props.value} checked={props.checked} onClick={props.onClick}/>
                <ListDialogItem style={{ paddingLeft: 10, display: 'inline-block' }}>
                    {props.text}
                </ListDialogItem>
            </label>
        </div>);
};
export class ProblemDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorOrigin: {},
            open: true
        };
        this.setAnchor = this.setAnchor.bind(this);
    }
    setAnchor(positionElement, position) {
        const { anchorOrigin } = this.state;
        anchorOrigin[positionElement] = position;
        FeedbackInfo.problem = anchorOrigin.vertical;
        this.setState({ anchorOrigin: anchorOrigin, });
    }
    ;
    render() {
        const { _isLocal, _isProvider, SendFeedback, handMSGState } = this.props;
        return (<Dialog contentStyle={{ maxWidth: '500px', minWidth: '400px' }} bodyStyle={{ textAlign: 'center', padding: 0 }} actionsContainerStyle={{ padding: 0 }} actions={[
            <div>
                        <SecondaryDialogButton style={{ width: '100%' }} onClick={() => {
                this.setState({ open: false });
                SendFeedback();
                handMSGState(MSGSteate.SendMSG);
            }}>
                            {WordingInfo.Skip[_isLocal]}
                        </SecondaryDialogButton>
                        <PrimaryDialogButton provider={_isProvider} style={{ width: '100%' }} onClick={() => {
                this.setState({ open: false });
                SendFeedback();
                handMSGState(MSGSteate.SendMSG);
            }}>
                            {WordingInfo.Submit[_isLocal]}
                        </PrimaryDialogButton>
                    </div>
        ]} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }}>
                <PaddingBox>
                    <div style={{ paddingTop: '20px', marginBottom: '20px' }}>
                        <DialogHeader>
                            {MSGSteateInfo.Problem[_isLocal]}
                        </DialogHeader>
                    </div>
                    <div style={{ paddingTop: '15px', marginBottom: '25px', padding: '0px 40px 0px 40px' }}>
                        <div style={{ width: '50%', minWidth: '250px', textAlign: '-webkit-left' }}>
                            {[
            { text: WordingInfo.VideoProblem[_isLocal], options: options.not_completed },
            { text: WordingInfo.VideoConnection[_isLocal], options: options.unstable },
            { text: WordingInfo.Others[_isLocal], options: options.other }
        ].map((value, index) => {
            return (<InputRadio key={index} text={value.text} onClick={() => this.setAnchor('vertical', value.options)} checked={this.state.anchorOrigin.vertical === value.options}/>);
        })}
                        </div>
                        {(this.state.anchorOrigin.vertical === options.other) ?
            <TextArea hintText={WordingInfo.Recommend[_isLocal]} floatingLabelText={WordingInfo.Feedback[_isLocal]} fullWidth={true} rows={2} onChange={(e, _value) => { FeedbackInfo.problem_other = _value; }}/>
            :
                undefined}
                    </div>
                </PaddingBox>
            </Dialog>);
    }
}
