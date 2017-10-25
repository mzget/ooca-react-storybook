//@ts-check
import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import FontIcon from 'material-ui/FontIcon';
import { black, grey500, grey900, blue900 } from 'material-ui/styles/colors';
import { Collapse } from 'react-collapse';

import {
    PrimaryDialogButton,
    DialogHeader,
    ContentDialog
} from '../../StyleComponents/DialogContentStyles';
import { getFontSize } from "../../UxUtils";
import { WordingInfo, Loc, ProviderLocalized } from '../../Localized/WordingInfo';

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

export class FollowUpPlanDialog extends React.Component<{ isLocal: string }, { open: boolean, value: string, isCollapse: boolean }> {
    constructor(props) {
        super(props);

        this.state = {
            open: true,
            value: "",
            isCollapse: false
        }

        this.onValueChange = this.onValueChange.bind(this);
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    onValueChange(event: any) {
        let value = event.target.value;
        this.setState({ value: value });

        console.log(value);

        if (value.match('follow0')) {
            this.setState({ isCollapse: true });
        }
        else {
            this.setState({ isCollapse: false });
        }
    }

    render() {
        const { isLocal } = this.props;
        return (
            <div>
                <Dialog
                    contentStyle={{ maxWidth: '500px', minWidth: '400px' }}
                    bodyStyle={{ textAlign: 'center' }}
                    actionsContainerStyle={{ padding: 0 }}
                    actions={[
                        <PrimaryDialogButton
                            provider={true}
                            style={{ width: '100%' }}
                            onClick={() => { }}>
                            {WordingInfo.Submit[isLocal]}
                        </PrimaryDialogButton>
                    ]}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={() => { this.setState({ open: false }) }}
                    autoScrollBodyContent={true}
                >
                    <div>
                        <div style={{ paddingTop: '20px', marginBottom: '30px' }}>
                            <DialogHeader>
                                {ProviderLocalized.FollowUp.FollowUpPlanHeader[isLocal]}
                            </DialogHeader>
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <RadioButton
                                value="follow0"
                                label={ProviderLocalized.FollowUp.FollowUpChoices[0][isLocal]}
                                labelStyle={styles.radioButton}
                                uncheckedIcon={<FontIcon className="material-icons" style={{ color: grey500 }} >radio_button_unchecked</FontIcon>}
                                onClick={this.onValueChange}
                                checked={(this.state.value.match("follow0")) ? true : false}
                            />
                            <Collapse isOpened={this.state.isCollapse}>
                                <div style={{ marginLeft: 32 }}>
                                    <RadioButton
                                        value="follow01"
                                        label={ProviderLocalized.FollowUp.FollowUpChoices[0][isLocal]}
                                        labelStyle={styles.radioButton}
                                        uncheckedIcon={<FontIcon className="material-icons" style={{ color: grey500 }} >radio_button_unchecked</FontIcon>}
                                        onClick={this.onValueChange}
                                        checked={(this.state.value == "follow01") ? true : false}
                                    />
                                    <RadioButton
                                        value="follow02"
                                        label={ProviderLocalized.FollowUp.FollowUpChoices[0][isLocal]}
                                        uncheckedIcon={<FontIcon className="material-icons" style={{ color: grey500 }} >radio_button_unchecked</FontIcon>}
                                        labelStyle={styles.radioButton}
                                        onClick={this.onValueChange}
                                        checked={(this.state.value == "follow02") ? true : false}
                                    />
                                    <RadioButton
                                        value="follow03"
                                        label={ProviderLocalized.FollowUp.FollowUpChoices[0][isLocal]}
                                        uncheckedIcon={<FontIcon className="material-icons" style={{ color: grey500 }} >radio_button_unchecked</FontIcon>}
                                        labelStyle={styles.radioButton}
                                        onClick={this.onValueChange}
                                        checked={(this.state.value == "follow03") ? true : false}
                                    />
                                </div>
                            </Collapse>
                            <RadioButton
                                value="follow1"
                                label={ProviderLocalized.FollowUp.FollowUpChoices[1][isLocal]}
                                labelStyle={styles.radioButton}
                                uncheckedIcon={<FontIcon className="material-icons" style={{ color: grey500 }} >radio_button_unchecked</FontIcon>}
                                onClick={this.onValueChange}
                                checked={(this.state.value == "follow1") ? true : false}
                            />
                            <RadioButton
                                value="follow2"
                                label={ProviderLocalized.FollowUp.FollowUpChoices[2][isLocal]}
                                labelStyle={styles.radioButton}
                                uncheckedIcon={<FontIcon className="material-icons" style={{ color: grey500 }} >radio_button_unchecked</FontIcon>}
                                onClick={this.onValueChange}
                                checked={(this.state.value == "follow2") ? true : false}
                            />
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}