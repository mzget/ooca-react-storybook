import * as React from 'react';
import { withMuiTheme } from '../index';
import { FollowUpPlanDialog } from './FollowUpPlanDialog';
const FollowUpPlanDialogWithTheme = withMuiTheme(FollowUpPlanDialog);
export class FollowUp extends React.Component {
    render() {
        return (<div>
                <FollowUpPlanDialogWithTheme />
            </div>);
    }
}
