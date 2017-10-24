//@ts-check
import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { black, grey800 } from 'material-ui/styles/colors';
import {
    PrimaryDialogButton,
    DialogHeader,
    ContentDialog
} from '../../StyleComponents/DialogContentStyles';
import { calcFontSize } from "../../UxUtils";
import { WordingInfo, Loc, ProviderLocalized } from '../../Localized/WordingInfo';

const styles = {
    radioButton: {
        marginBottom: 16,
        fontSize: calcFontSize(),
        color: grey800,
        fontFamily: ''
    },
};

export class FollowUpPlanDialog extends React.Component<{ isLocal: string }, { open: boolean }> {
    constructor(props) {
        super(props);

        this.state = {
            open: true
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
                >
                    <div>
                        <div style={{ paddingTop: '20px', marginBottom: '30px' }}>
                            <DialogHeader>
                                {ProviderLocalized.FollowUp.FollowUpPlanHeader[isLocal]}
                            </DialogHeader>
                        </div>
                        <ContentDialog>
                            <RadioButtonGroup name="followUp" style={{ textAlign: 'left' }}>
                                <RadioButton
                                    value="follow0"
                                    label={ProviderLocalized.FollowUp.FollowUpChoices[0][isLocal]}
                                    labelStyle={styles.radioButton}
                                />
                                <RadioButton
                                    value="follow1"
                                    label={ProviderLocalized.FollowUp.FollowUpChoices[1][isLocal]}
                                    labelStyle={styles.radioButton}
                                />
                                <RadioButton
                                    value="follow2"
                                    label={ProviderLocalized.FollowUp.FollowUpChoices[2][isLocal]}
                                    labelStyle={styles.radioButton}
                                />
                            </RadioButtonGroup>
                        </ContentDialog>
                    </div>
                </Dialog>
            </div>
        );
    }
}