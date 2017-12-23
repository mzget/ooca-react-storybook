"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Dialog_1 = require("material-ui/Dialog");
const Styles_1 = require("../StyleComponents/Styles");
const DialogContentStyles_1 = require("../StyleComponents/DialogContentStyles");
const UxUtils_1 = require("../UxUtils");
const WordingInfo_1 = require("../Localized/WordingInfo");
const MessageInfo_1 = require("../Localized/MessageInfo");
const AppUtils_1 = require("../AppUtils");
const InputRadio = (props) => {
    return (<div className="control">
            <label className="radio" style={{ display: 'flex', marginBottom: 10 }}>
                <input type="radio" name={props.name} style={{ display: 'inline-block', marginRight: 10, fontSize: UxUtils_1.getFontSize() }} value={props.value} checked={props.checked} onClick={props.onClick}/>
                <DialogContentStyles_1.ListDialogItem style={{ paddingLeft: 10, display: 'inline-block', fontSize: UxUtils_1.getFontSize() }}>
                    {props.text}
                </DialogContentStyles_1.ListDialogItem>
            </label>
        </div>);
};
class ProblemDialog extends React.Component {
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
        MessageInfo_1.FeedbackInfo.problem = anchorOrigin.vertical;
        this.setState({ anchorOrigin: anchorOrigin, });
    }
    ;
    render() {
        const { _isLocal, _isProvider, SendFeedback, handMSGState } = this.props;
        return (<Dialog_1.default contentStyle={{ maxWidth: UxUtils_1.getDialogWidth() }} bodyStyle={{ textAlign: 'center', padding: 30 }} actionsContainerStyle={{ padding: 0 }} actions={[
            <div>
                        <DialogContentStyles_1.SecondaryDialogButton style={{ width: '100%' }} onClick={() => {
                this.setState({ open: false });
                SendFeedback();
                handMSGState(AppUtils_1.MSGSteate.SendMSG);
            }}>
                            {WordingInfo_1.WordingInfo.Skip[_isLocal]}
                        </DialogContentStyles_1.SecondaryDialogButton>
                        <DialogContentStyles_1.PrimaryDialogButton provider={_isProvider} style={{ width: '100%' }} onClick={() => {
                this.setState({ open: false });
                SendFeedback();
                handMSGState(AppUtils_1.MSGSteate.SendMSG);
            }}>
                            {WordingInfo_1.WordingInfo.Submit[_isLocal]}
                        </DialogContentStyles_1.PrimaryDialogButton>
                    </div>
        ]} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }}>
                <div>
                    <DialogContentStyles_1.DialogHeader>
                        {MessageInfo_1.MSGSteateInfo.Problem[_isLocal]}
                    </DialogContentStyles_1.DialogHeader>
                    <div style={{ textAlign: 'left' }}>
                        <div style={{ width: '100%', minWidth: '250px', textAlign: '-webkit-left' }}>
                            {[
            { text: WordingInfo_1.WordingInfo.VideoProblem[_isLocal], options: MessageInfo_1.options.not_completed },
            { text: WordingInfo_1.WordingInfo.VideoConnection[_isLocal], options: MessageInfo_1.options.unstable },
            { text: WordingInfo_1.WordingInfo.Others[_isLocal], options: MessageInfo_1.options.other }
        ].map((value, index) => {
            return (<InputRadio key={index} text={value.text} onClick={() => this.setAnchor('vertical', value.options)} checked={this.state.anchorOrigin.vertical === value.options}/>);
        })}
                        </div>
                        {(this.state.anchorOrigin.vertical === MessageInfo_1.options.other) ?
            <Styles_1.TextArea hintText={WordingInfo_1.WordingInfo.Recommend[_isLocal]} floatingLabelText={WordingInfo_1.WordingInfo.Feedback[_isLocal]} fullWidth={true} rows={2} onChange={(_event) => {
                MessageInfo_1.FeedbackInfo.problem_other = _event.target.value;
            }}/>
            :
                undefined}
                    </div>
                </div>
            </Dialog_1.default>);
    }
}
exports.ProblemDialog = ProblemDialog;
