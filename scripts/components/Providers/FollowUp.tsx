import * as React from 'react';
import { withMuiTheme } from '../index';
import { FollowUpPlanDialog } from './FollowUpPlanDialog';

import { WordingInfo, Loc, ProviderLocalized } from '../../Localized/WordingInfo';

// const FollowUpPlanDialogWithTheme = withMuiTheme(FollowUpPlanDialog);

export class FollowUp extends React.Component<{ isLocal: boolean, onSubmit: (value: string) => void }, any> {
    render() {
        const { onSubmit } = this.props;
        return (
            <div>
                <FollowUpPlanDialog
                    isLocal={this.props.isLocal}
                    onSubmit={(value) => onSubmit(value)}
                />
            </div>
        );
    }
}