import * as React from 'react';
import { withMuiTheme } from '../index';
import { FollowUpPlanDialog } from './FollowUpPlanDialog';

import { WordingInfo, Loc, ProviderLocalized } from '../../Localized/WordingInfo';

const FollowUpPlanDialogWithTheme = withMuiTheme(FollowUpPlanDialog);

export class FollowUp extends React.Component<any, any> {
    render() {
        return (
            <div>
                <FollowUpPlanDialogWithTheme />
            </div>
        );
    }
}