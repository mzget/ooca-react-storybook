//@ts-check
import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import { RadioButton } from 'material-ui/RadioButton';
import SvgIcon from 'material-ui/SvgIcon';
import { grey500, grey900 } from 'material-ui/styles/colors';
import { Collapse } from 'react-collapse';
import { PrimaryDialogButton, DialogHeader } from '../../StyleComponents/DialogContentStyles';
import { getFontSize, getDialogWidth } from "../../UxUtils";
import { WordingInfo, ProviderLocalized } from '../../Localized/WordingInfo';
const radio_button_unchecked = () => (<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>);
const styles = {
    radioButton: {
        marginBottom: 10,
        fontSize: getFontSize(),
        color: grey900,
        fontFamily: 'Prompt'
    },
};
// checkedIcon={ <FontIcon className="material-icons" >radio_button_checked</FontIcon>}
// uncheckedIcon={<FontIcon className="material-icons" >radio_button_unchecked</FontIcon>}
export class FollowUpPlanDialog extends React.Component {
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
        return (<RadioButton key={id} value={value} label={ProviderLocalized.FollowUp.FollowUpSubChoices[id][isLocal]} labelStyle={styles.radioButton} uncheckedIcon={<SvgIcon style={{ color: grey500 }}>
                        {radio_button_unchecked()}
                    </SvgIcon>} onClick={this.onValueChange} checked={(this.state.value == value) ? true : false}/>);
    }
    submitFollowUp() {
        const { onSubmit } = this.props;
        if (this.state.value === '' || this.state.value === "follow0") {
            return;
        }
        this.setState({ open: false });
        onSubmit(this.choices.get(this.state.value));
    }
    render() {
        const { isLocal } = this.props;
        return (<Dialog contentStyle={{ maxWidth: getDialogWidth() }} bodyStyle={{ textAlign: 'center' }} actionsContainerStyle={{ padding: 0 }} actions={[
            <PrimaryDialogButton disabled={(this.state.value !== '' && this.state.value !== "follow0") ? false : true} provider={true} style={{ width: '100%' }} onClick={this.submitFollowUp}>
                        {WordingInfo.Submit[isLocal]}
                    </PrimaryDialogButton>
        ]} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }} autoScrollBodyContent={true}>
                <div>
                    <DialogHeader>
                        {ProviderLocalized.FollowUp.FollowUpPlanHeader[isLocal]}
                    </DialogHeader>
                    <div style={{ textAlign: 'left' }}>
                        <RadioButton value="follow0" label={ProviderLocalized.FollowUp.FollowUpChoices[0][isLocal]} labelStyle={styles.radioButton} uncheckedIcon={<SvgIcon style={{ color: grey500 }}>
                                    {radio_button_unchecked()}
                                </SvgIcon>} onClick={this.onValueChange} checked={(this.state.value.match("follow0")) ? true : false}/>
                        <Collapse isOpened={this.state.isCollapse}>
                            <div style={{ marginLeft: 32 }}>
                                {this.subChoices.map((element, id, arr) => {
            return this.getSubChoices(id, element);
        })}
                            </div>
                        </Collapse>
                        <RadioButton value="follow1" label={ProviderLocalized.FollowUp.FollowUpChoices[1][isLocal]} labelStyle={styles.radioButton} uncheckedIcon={<SvgIcon style={{ color: grey500 }}>
                                    {radio_button_unchecked()}
                                </SvgIcon>} onClick={this.onValueChange} checked={(this.state.value == "follow1") ? true : false}/>
                        <RadioButton value="follow2" label={ProviderLocalized.FollowUp.FollowUpChoices[2][isLocal]} labelStyle={styles.radioButton} uncheckedIcon={<SvgIcon style={{ color: grey500 }}>
                                    {radio_button_unchecked()}
                                </SvgIcon>} onClick={this.onValueChange} checked={(this.state.value == "follow2") ? true : false}/>
                    </div>
                </div>
            </Dialog>);
    }
}
