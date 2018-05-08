/* eslint-disable */
import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import { calcFontSize, getFontSize, getDialogWidth } from "../UxUtils";
import { PrimaryDialogButton, ContentDialog, DialogHeader } from '../StyleComponents/DialogContentStyles';
import { WordingInfo, Loc, ProviderLocalized } from '../Localized/WordingInfo';
export class PleaseNoteDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }
    render() {
        const { _isLocal, isProvider, onClose } = this.props;
        const msgLabelFont = calcFontSize();
        return (<Dialog contentStyle={{ maxWidth: getDialogWidth() }} titleStyle={{ fontWeight: 'bold', textAlign: 'center' }} bodyStyle={{ textAlign: 'center' }} actionsContainerStyle={{ padding: 0 }} actions={[
            <PrimaryDialogButton provider={isProvider} style={{ width: '100%', textAlign: 'center' }} onClick={() => {
                this.setState({ open: false });
                onClose();
            }}>
                        {WordingInfo.Close[_isLocal]}
                    </PrimaryDialogButton>,
        ]} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }}>
                <div>
                    <DialogHeader>
                        {(isProvider == true)
            ? ProviderLocalized.PleaseNote[_isLocal]
            : Loc.PleaseNote[_isLocal]}
                    </DialogHeader>
                    <ContentDialog fontsize={getFontSize()}>
                        {(isProvider == true) ?
            ProviderLocalized.PleaseNoteDetail[_isLocal] :
            Loc.PleaseNoteDetail[_isLocal]}
                    </ContentDialog>
                </div>
            </Dialog>);
    }
}
