"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-check
const React = require("react");
const Dialog_1 = require("material-ui/Dialog");
const RadioButton_1 = require("material-ui/RadioButton");
const SvgIcon_1 = require("material-ui/SvgIcon");
const colors_1 = require("material-ui/styles/colors");
const react_collapse_1 = require("react-collapse");
const DialogContentStyles_1 = require("../../StyleComponents/DialogContentStyles");
const UxUtils_1 = require("../../UxUtils");
const WordingInfo_1 = require("../../Localized/WordingInfo");
const radio_button_unchecked = () => (<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>);
const styles = {
    radioButton: {
        marginBottom: 10,
        fontSize: UxUtils_1.getFontSize(),
        color: colors_1.grey900,
        fontFamily: 'Prompt'
    },
};
// checkedIcon={ <FontIcon className="material-icons" >radio_button_checked</FontIcon>}
// uncheckedIcon={<FontIcon className="material-icons" >radio_button_unchecked</FontIcon>}
class FollowUpPlanDialog extends React.Component {
    constructor(props) {
        super(props);
        this.subChoices = ['follow01', 'follow02', 'follow03'];
        this.choices = new Map();
        this.state = {
            open: true,
            value: "",
            isCollapse: false
        };
        // next_week, two_week, next_month, no, hospital
        this.choices.set('follow01', 'next_week');
        this.choices.set('follow02', 'two_week');
        this.choices.set('follow03', 'next_month');
        this.choices.set('follow1', 'no');
        this.choices.set('follow2', 'hospital');
        this.onValueChange = this.onValueChange.bind(this);
        this.getSubChoices = this.getSubChoices.bind(this);
        this.submitFollowUp = this.submitFollowUp.bind(this);
    }
    componentDidCatch(error, info) {
        console.log(error, info);
    }
    onValueChange(event) {
        let value = event.target.value;
        this.setState({ value: value });
        if (value.match('follow0')) {
            this.setState({ isCollapse: true });
        }
        else {
            this.setState({ isCollapse: false });
        }
    }
    getSubChoices(id, value) {
        const { isLocal } = this.props;
        return (<RadioButton_1.RadioButton key={id} value={value} label={WordingInfo_1.ProviderLocalized.FollowUp.FollowUpSubChoices[id][isLocal]} labelStyle={styles.radioButton} uncheckedIcon={<SvgIcon_1.default style={{ color: colors_1.grey500 }}>
                        {radio_button_unchecked()}
                    </SvgIcon_1.default>} onClick={this.onValueChange} checked={(this.state.value == value) ? true : false}/>);
    }
    submitFollowUp() {
        const { onSubmit } = this.props;
        if (this.state.value === '') {
            return;
        }
        this.setState({ open: false });
        onSubmit(this.choices.get(this.state.value));
    }
    render() {
        const { isLocal } = this.props;
        return (<Dialog_1.default contentStyle={{ maxWidth: UxUtils_1.getDialogWidth() }} bodyStyle={{ textAlign: 'center' }} actionsContainerStyle={{ padding: 0 }} actions={[
            <DialogContentStyles_1.PrimaryDialogButton disabled={(this.state.value !== '') ? false : true} provider={true} style={{ width: '100%' }} onClick={this.submitFollowUp}>
                        {WordingInfo_1.WordingInfo.Submit[isLocal]}
                    </DialogContentStyles_1.PrimaryDialogButton>
        ]} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }} autoScrollBodyContent={true}>
                <div>
                    <DialogContentStyles_1.DialogHeader>
                        {WordingInfo_1.ProviderLocalized.FollowUp.FollowUpPlanHeader[isLocal]}
                    </DialogContentStyles_1.DialogHeader>
                    <div style={{ textAlign: 'left' }}>
                        <RadioButton_1.RadioButton value="follow0" label={WordingInfo_1.ProviderLocalized.FollowUp.FollowUpChoices[0][isLocal]} labelStyle={styles.radioButton} uncheckedIcon={<SvgIcon_1.default style={{ color: colors_1.grey500 }}>
                                    {radio_button_unchecked()}
                                </SvgIcon_1.default>} onClick={this.onValueChange} checked={(this.state.value.match("follow0")) ? true : false}/>
                        <react_collapse_1.Collapse isOpened={this.state.isCollapse}>
                            <div style={{ marginLeft: 32 }}>
                                {this.subChoices.map((element, id, arr) => {
            return this.getSubChoices(id, element);
        })}
                            </div>
                        </react_collapse_1.Collapse>
                        <RadioButton_1.RadioButton value="follow1" label={WordingInfo_1.ProviderLocalized.FollowUp.FollowUpChoices[1][isLocal]} labelStyle={styles.radioButton} uncheckedIcon={<SvgIcon_1.default style={{ color: colors_1.grey500 }}>
                                    {radio_button_unchecked()}
                                </SvgIcon_1.default>} onClick={this.onValueChange} checked={(this.state.value == "follow1") ? true : false}/>
                        <RadioButton_1.RadioButton value="follow2" label={WordingInfo_1.ProviderLocalized.FollowUp.FollowUpChoices[2][isLocal]} labelStyle={styles.radioButton} uncheckedIcon={<SvgIcon_1.default style={{ color: colors_1.grey500 }}>
                                    {radio_button_unchecked()}
                                </SvgIcon_1.default>} onClick={this.onValueChange} checked={(this.state.value == "follow2") ? true : false}/>
                    </div>
                </div>
            </Dialog_1.default>);
    }
}
exports.FollowUpPlanDialog = FollowUpPlanDialog;
