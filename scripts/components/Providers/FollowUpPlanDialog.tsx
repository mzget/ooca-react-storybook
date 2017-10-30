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

export class FollowUpPlanDialog extends React.Component<{ isLocal: string, onSubmit: (value: string) => void }, { open: boolean, value: string, isCollapse: boolean }> {

    subChoices = ['follow01', 'follow02', 'follow03'];

    constructor(props) {
        super(props);

        this.state = {
            open: true,
            value: "",
            isCollapse: false
        }

        this.onValueChange = this.onValueChange.bind(this);
        this.getSubChoices = this.getSubChoices.bind(this);
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    onValueChange(event: any) {
        let value = event.target.value;
        this.setState({ value: value });

        if (value.match('follow0')) {
            this.setState({ isCollapse: true });
        }
        else {
            this.setState({ isCollapse: false });
        }
    }

    getSubChoices(id: number, value: string) {
        const { isLocal } = this.props;
        return (
            <RadioButton
                key={id}
                value={value}
                label={ProviderLocalized.FollowUp.FollowUpSubChoices[id][isLocal]}
                labelStyle={styles.radioButton}
                uncheckedIcon={<FontIcon className="material-icons" style={{ color: grey500 }} >radio_button_unchecked</FontIcon>}
                onClick={this.onValueChange}
                checked={(this.state.value == value) ? true : false}
            />
        );
    }

    render() {
        const { isLocal, onSubmit } = this.props;
        return (
            <Dialog
                contentStyle={{ maxWidth: '90%' }}
                bodyStyle={{ textAlign: 'center' }}
                actionsContainerStyle={{ padding: 0 }}
                actions={[
                    <PrimaryDialogButton
                        disabled={(this.state.value !== '') ? false : true}
                        provider={true}
                        style={{ width: '100%' }}
                        onClick={() => {
                            if (this.state.value === '') {
                                return;
                            }

                            this.setState({ open: false });
                            onSubmit(this.state.value);
                        }}>
                        {WordingInfo.Submit[isLocal]}
                    </PrimaryDialogButton>
                ]}
                modal={true}
                open={this.state.open}
                onRequestClose={() => { this.setState({ open: false }) }}
                autoScrollBodyContent={true}
            >
                <div>
                    <DialogHeader>
                        {ProviderLocalized.FollowUp.FollowUpPlanHeader[isLocal]}
                    </DialogHeader>
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
                                {
                                    this.subChoices.map((element, id, arr) => {
                                        return this.getSubChoices(id, element);
                                    })
                                }
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
        );
    }
}