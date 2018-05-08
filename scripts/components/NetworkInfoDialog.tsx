import * as React from 'react';

import Dialog from 'material-ui/Dialog';

import { calcFontSize, getFontSize, getDialogWidth } from "../UxUtils";
import { } from '../StyleComponents/Styles';
import { PrimaryDialogButton, LableDialog, ContentDialog, DialogHeader } from '../StyleComponents/DialogContentStyles';

import { WordingInfo, Loc, ProviderLocalized } from '../Localized/WordingInfo';
import Localized from "../Localized/index";

const { reformated, DialogMessages } = Localized;

export class NetworkInfoDialog extends React.Component<{
    isLocal: string,
    isProvider: boolean,
    active: boolean,
    onClose: () => void
}, { open: boolean }> {
    constructor(props: any) {
        super(props);

        this.state = {
            open: this.props.active
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.warn("getDerivedStateFromProps", nextProps, prevState);
        if (nextProps.active !== prevState.open) {
            return { open: nextProps.active };
        }

        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.warn("shouldComponentUpdate", nextProps, nextState);
        return false;
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
                        {WordingInfo.Close[reformated(isLocal)]}
                    </PrimaryDialogButton>,
                ]}
                modal={true}
                open={this.state.open}
                onRequestClose={() => { this.setState({ open: false }) }}
            >
                <div>
                    <DialogHeader>
                        {
                            DialogMessages.NetworkWarning[reformated(isLocal)]
                        }
                    </DialogHeader>
                    <ContentDialog fontsize={getFontSize()}>
                        {
                            DialogMessages.NetworkSpeed[reformated(isLocal)]
                        }
                    </ContentDialog>
                </div>
            </Dialog>
        );
    }
}