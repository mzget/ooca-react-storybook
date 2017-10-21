/* eslint-disable */

import * as React from 'react';

import Dialog from 'material-ui/Dialog';

import { calcFontSize } from "../UxUtils";
import { PrimaryDialogButton, LableDialog } from '../StyleComponents/DialogContentStyles';
import { } from '../StyleComponents/Styles';

import { MSGSteateInfo, SendInfo, FeedbackInfo, options } from '../Localized/MessageInfo';
import { WordingInfo } from '../Localized/WordingInfo';

export class ThankyouDialog extends React.Component<{ isLocal: string, isProvider: boolean, handCallBack: () => void, handleClose: () => void }, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            open: true
        }

        this.getButton = this.getButton.bind(this);
    }

    getButton() {
        const { isLocal, isProvider, handCallBack, handleClose } = this.props;
        let buttons = [
            <div style={{ display: 'flex' }}>
                <PrimaryDialogButton provider={isProvider} style={{ width: '100%', textAlign: 'center' }}
                    onClick={() => {
                        this.setState({ open: false });
                        handleClose();
                    }}  >
                    {WordingInfo.Continue[isLocal]}
                </PrimaryDialogButton>
                {
                    (isProvider) ?
                        <PrimaryDialogButton provider={isProvider} style={{ width: '100%', textAlign: 'center' }}
                            onClick={() => {
                                this.setState({ open: false });
                                handCallBack();
                            }} >
                            {WordingInfo.CallBack[isLocal]}
                        </PrimaryDialogButton> : null
                }

            </div>
        ] as Array<any>;

        return buttons;
    }

    render() {
        const msgLabelFont = calcFontSize();
        const { isLocal, isProvider, handCallBack, handleClose } = this.props;

        return (
            <Dialog
                contentStyle={{ maxWidth: '500px', minWidth: '400px' }}
                bodyStyle={{ textAlign: 'center' }}
                actionsContainerStyle={{ padding: 0 }}
                actions={this.getButton()}
                modal={true}
                open={this.state.open}
                onRequestClose={() => { this.setState({ open: false }) }}
            >
                <div style={{ paddingTop: '20px', marginBottom: '30px' }}>
                    <LableDialog style={msgLabelFont}>
                        {MSGSteateInfo.Thank[isLocal]}
                    </LableDialog>
                </div>
            </Dialog>
        );
    }
}