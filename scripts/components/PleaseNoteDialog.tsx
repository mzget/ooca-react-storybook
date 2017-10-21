/* eslint-disable */
import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { defaultMuiTheme } from "./MaterialUtils";
import Dialog from 'material-ui/Dialog';

import { WordingInfo, Loc, ProviderLocalized } from '../Localized/WordingInfo';
import { calcFontSize } from "../UxUtils";
import { } from '../StyleComponents/Styles';
import { PrimaryDialogButton, LableDialog, ContentDialog, DialogHeader } from './DialogContent';

export class PleaseNoteDialog extends React.Component<{ _isLocal: string, isProvider: boolean, onClose: () => void }, { open: boolean }> {
    constructor(props: any) {
        super(props);

        this.state = {
            open: true
        }
    }

    render() {
        const { _isLocal, isProvider, onClose } = this.props;
        const msgLabelFont = calcFontSize();

        return (
            <MuiThemeProvider muiTheme={defaultMuiTheme}>
                <Dialog
                    contentStyle={{ maxWidth: '500px', minWidth: '400px' }}
                    titleStyle={{ fontWeight: 'bold', textAlign: 'center' }}
                    bodyStyle={{ textAlign: 'center' }}
                    actionsContainerStyle={{ padding: 0 }}
                    actions={[
                        <PrimaryDialogButton style={{ width: '100%', textAlign: 'center' }}
                            onClick={() => {
                                this.setState({ open: false });
                                onClose();
                            }}
                        >
                            {WordingInfo.Close[_isLocal]}
                        </PrimaryDialogButton>,
                    ]}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={() => { console.log('request close') }}
                >
                    <div>
                        <div style={{ paddingTop: '20px', marginBottom: '30px' }}>
                            <DialogHeader>
                                {(isProvider == true)
                                    ? ProviderLocalized.PleaseNote[_isLocal]
                                    : Loc.PleaseNote[_isLocal]}
                            </DialogHeader>
                        </div>
                        <ContentDialog>
                            {
                                (isProvider == true) ?
                                    ProviderLocalized.PleaseNoteDetail[_isLocal] :
                                    Loc.PleaseNoteDetail[_isLocal]
                            }
                        </ContentDialog>
                    </div>
                </Dialog>
            </MuiThemeProvider >
        );
    }
}