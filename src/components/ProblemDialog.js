import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import { TextArea } from "../StyleComponents/Styles";
import { PrimaryDialogButton, SecondaryDialogButton, DialogHeader, ListDialogItem } from '../StyleComponents/DialogContentStyles';
import { getFontSize, getDialogWidth } from '../UxUtils';
import { WordingInfo } from '../Localized/WordingInfo';
import { MSGSteateInfo, options, FeedbackInfo } from '../Localized/MessageInfo';
import { MSGSteate } from '../AppUtils';
const InputRadio = (props) => {
    return (<div className="control">
            <label className="radio" style={{ display: 'flex', marginBottom: 10 }}>
                <input type="radio" name={props.name} style={{ display: 'inline-block', marginRight: 10, fontSize: getFontSize() }} value={props.value} checked={props.checked} onClick={props.onClick}/>
                <ListDialogItem style={{ paddingLeft: 10, display: 'inline-block', fontSize: getFontSize() }}>
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
            open: true,
            problemDetail: "",
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
    setProblemDetail(event) {
        this.setState({ problemDetail: event.target.value }, () => FeedbackInfo.problem_other = this.state.problemDetail);
    }
    render() {
        const { _isLocal, _isProvider, SendFeedback, handMSGState } = this.props;
        return (<Dialog contentStyle={{ maxWidth: getDialogWidth() }} bodyStyle={{ textAlign: 'center', padding: 30 }} actionsContainerStyle={{ padding: 0 }} actions={[
            <div>
                        <SecondaryDialogButton style={{ width: '100%' }} onClick={() => {
                if (this.state.anchorOrigin.vertical !== options.other || this.state.problemDetail !== "") {
                    this.setState({ open: false });
                    SendFeedback();
                    handMSGState(MSGSteate.SendMSG);
                }
            }} disabled={(this.state.anchorOrigin.vertical !== options.other || this.state.problemDetail !== "") ? false : true}>
                            {WordingInfo.Skip[_isLocal]}
                        </SecondaryDialogButton>
                        <PrimaryDialogButton provider={_isProvider} style={{ width: '100%' }} disabled={(this.state.anchorOrigin.vertical !== options.other || this.state.problemDetail !== "") ? false : true} onClick={() => {
                if (this.state.anchorOrigin.vertical !== options.other || this.state.problemDetail !== "") {
                    this.setState({ open: false });
                    SendFeedback();
                    handMSGState(MSGSteate.SendMSG);
                }
            }}>
                            {WordingInfo.Submit[_isLocal]}
                        </PrimaryDialogButton>
                    </div>
        ]} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }}>
                <div>
                    <DialogHeader>
                        {MSGSteateInfo.Problem[_isLocal]}
                    </DialogHeader>
                    <div style={{ textAlign: 'left' }}>
                        <div style={{ width: '100%', minWidth: '250px', textAlign: '-webkit-left' }}>
                            {[
            { text: WordingInfo.VideoProblem[_isLocal], options: options.not_completed },
            { text: WordingInfo.VideoConnection[_isLocal], options: options.unstable },
            { text: WordingInfo.Others[_isLocal], options: options.other }
        ].map((value, index) => {
            return (<InputRadio key={index} text={value.text} onClick={() => this.setAnchor('vertical', value.options)} checked={this.state.anchorOrigin.vertical === value.options}/>);
        })}
                        </div>
                        {(this.state.anchorOrigin.vertical === options.other) ?
            <TextArea hintText={WordingInfo.Recommend[_isLocal]} floatingLabelText={WordingInfo.Feedback[_isLocal]} fullWidth={true} rows={2} placeholder={"Request"} value={this.state.problemDetail} onChange={this.setProblemDetail.bind(this)}/>
            :
                undefined}
                    </div>
                </div>
            </Dialog>);
    }
}
