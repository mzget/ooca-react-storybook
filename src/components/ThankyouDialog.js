/* eslint-disable */
import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import { getDialogWidth } from "../UxUtils";
import { PrimaryDialogButton, ContentDialog } from '../StyleComponents/DialogContentStyles';
import { MSGSteateInfo } from '../Localized/MessageInfo';
import { WordingInfo } from '../Localized/WordingInfo';
export class ThankyouDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
        this.getButton = this.getButton.bind(this);
    }
    getButton() {
        const { isLocal, isProvider, handCallBack, handleClose } = this.props;
        let buttons = [
            <div style={{ display: 'flex' }}>
                <PrimaryDialogButton provider={isProvider} style={{ width: '100%', textAlign: 'center' }} onClick={() => {
                this.setState({ open: false });
                handleClose();
            }}>
                    {WordingInfo.Continue[isLocal]}
                </PrimaryDialogButton>
                

            </div>
        ];
        return buttons;
    }
    render() {
        const { isLocal, isProvider, handCallBack, handleClose } = this.props;
        return (<Dialog contentStyle={{ maxWidth: getDialogWidth() }} bodyStyle={{ textAlign: 'center' }} actionsContainerStyle={{ padding: 0 }} actions={this.getButton()} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }}>
                <div style={{ paddingTop: '20px', marginBottom: '30px' }}>
                    <ContentDialog fontsize={17}>
                        {MSGSteateInfo.Thank[isLocal]}
                    </ContentDialog>
                </div>
            </Dialog>);
    }
}
