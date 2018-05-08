import * as React from 'react';

import Dialog from 'material-ui/Dialog';

import { calcFontSize, getFontSize, getDialogWidth } from "../UxUtils";
import { } from '../StyleComponents/Styles';
import { PrimaryDialogButton, LableDialog, ContentDialog, DialogHeader } from '../StyleComponents/DialogContentStyles';

import { WordingInfo, Loc, ProviderLocalized } from '../Localized/WordingInfo';
import { DialogMessages } from "../Localized/MessageInfo";

export class NetworkInfoDialog extends React.Component<{ isLocal: string, isProvider: boolean, onClose: () => void }, { open: boolean }> {
    constructor(props: any) {
        super(props);

        this.state = {
            open: true
        }
    }

    render() {
        const { isLocal, isProvider, onClose } = this.props;
        const msgLabelFont = calcFontSize();

        return (
            <Dialog
                contentStyle={{ maxWidth: getDialogWidth() }}
                titleStyle={{ fontWeight: 'bold', textAlign: 'center' }}
                bodyStyle={{ textAlign: 'center' }}
                actionsContainerStyle={{ padding: 0 }}
                actions={[
                    <PrimaryDialogButton provider={isProvider} style={{ width: '100%', textAlign: 'center' }}
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
                    <DialogHeader>
                        {
                            DialogMessages.NetworkWarning[isLocal]
                        }
                    </DialogHeader>
                    <ContentDialog fontsize={getFontSize()}>
                        {
                            DialogMessages.NetworkSpeed[isLocal]
                        }
                    </ContentDialog>
                </div>
            </Dialog>
        );
    }
}