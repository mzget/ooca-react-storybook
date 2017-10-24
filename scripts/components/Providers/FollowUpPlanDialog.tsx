//@ts-check
import * as React from 'react';
import Dialog from 'material-ui/Dialog';

import {
    PrimaryDialogButton,
    DialogHeader,
    ContentDialog
} from '../../StyleComponents/DialogContentStyles';
import { WordingInfo, Loc, ProviderLocalized } from '../Localized/WordingInfo';

export class FollowUpPlanDialog extends React.Component<{ isLocal: boolean }, { open: boolean }> {
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
                            {ProviderLocalized.FollowUpPlanHeader[isLocal]}
                        </PrimaryDialogButton>
                    ]}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={() => { this.setState({ open: false }) }}
                >
                    <div>
                        <div style={{ paddingTop: '20px', marginBottom: '30px' }}>
                            <DialogHeader>
                            </DialogHeader>
                        </div>
                        <ContentDialog>
                        </ContentDialog>
                    </div>
                </Dialog>
            </div>
        );
    }
}