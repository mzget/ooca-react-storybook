//@ts-check
import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { black } from 'material-ui/styles/colors';
import { PrimaryDialogButton, DialogHeader, ContentDialog } from '../../StyleComponents/DialogContentStyles';
import { WordingInfo, ProviderLocalized } from '../../Localized/WordingInfo';
const styles = {
    radioButton: {
        marginBottom: 16,
        color: black
    },
};
export class FollowUpPlanDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }
    render() {
        const { isLocal } = this.props;
        return (<div>
                <Dialog contentStyle={{ maxWidth: '500px', minWidth: '400px' }} bodyStyle={{ textAlign: 'center' }} actionsContainerStyle={{ padding: 0 }} actions={[
            <PrimaryDialogButton provider={true} style={{ width: '100%' }} onClick={() => { }}>
                            {WordingInfo.Submit[isLocal]}
                        </PrimaryDialogButton>
        ]} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }}>
                    <div>
                        <div style={{ paddingTop: '20px', marginBottom: '30px' }}>
                            <DialogHeader>
                                {ProviderLocalized.FollowUp.FollowUpPlanHeader[isLocal]}
                            </DialogHeader>
                        </div>
                        <ContentDialog>
                            <RadioButtonGroup name="followUp" style={{ textAlign: 'left' }}>
                                <RadioButton value="light" label="Simple" style={styles.radioButton}/>
                                <RadioButton value="not_light" label="Selected by default" style={styles.radioButton}/>
                            </RadioButtonGroup>
                        </ContentDialog>
                    </div>
                </Dialog>
            </div>);
    }
}
