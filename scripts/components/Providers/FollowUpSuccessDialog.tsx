import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FontIcon from 'material-ui/FontIcon';
import { grey500, white, black } from 'material-ui/styles/colors';

import { getFontSize } from "../../UxUtils";
import { PrimaryDialogButton, LableDialog, ContentDialog, DialogHeader } from '../../StyleComponents/DialogContentStyles';
import { WordingInfo, Loc, ProviderLocalized } from '../../Localized/WordingInfo';

import IconUp from '../../../Images/up_icon.png';

export class FollowUpSuccessDialog extends React.Component<{ isLocal: string, isProvider: boolean, onClose: () => void }, { open: boolean }> {
    constructor(props: any) {
        super(props);

        this.state = {
            open: true
        }
    }

    render() {
        const { isLocal, isProvider, onClose } = this.props;
        let imgStyle = { width: '128', height: '128' };

        return (
            <Dialog
                contentStyle={{ maxWidth: '500px', minWidth: '400px' }}
                titleStyle={{ fontWeight: 'bold', textAlign: 'center' }}
                bodyStyle={{ textAlign: 'center' }}
                actionsContainerStyle={{ padding: 0 }}
                actions={[
                    <PrimaryDialogButton
                        provider={isProvider}
                        style={{ width: '100%', textAlign: 'center' }}
                        onClick={() => {
                            this.setState({ open: false });
                            onClose();
                        }}
                    >
                        {WordingInfo.Close[isLocal]}
                    </PrimaryDialogButton>,
                ]}
                modal={true}
                open={this.state.open}
                onRequestClose={() => { this.setState({ open: false }) }}
            >
                <div>
                    <FontIcon className="material-icons" style={{ fontSize: 96 }} color={grey500}>check_circle</FontIcon>
                    <DialogHeader>
                        {WordingInfo.Success[isLocal]}
                    </DialogHeader>
                    <ContentDialog fontsize={getFontSize()}>
                        {
                            Loc.FeedbackSuccess[isLocal]
                        }
                    </ContentDialog>
                </div>
            </Dialog>
        );
    }
}