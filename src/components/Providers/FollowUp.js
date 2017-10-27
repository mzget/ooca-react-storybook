import * as React from 'react';
import { withMuiTheme } from '../index';
import { FollowUpPlanDialog } from './FollowUpPlanDialog';
const FollowUpPlanDialogWithTheme = withMuiTheme(FollowUpPlanDialog);
export class FollowUp extends React.Component {
    render() {
        const { onSubmit } = this.props;
        return (
            <div>
                <FollowUpPlanDialogWithTheme isLocal={this.props.isLocal} onSubmit={(value) => onSubmit(value)} />
            </div>);
    }
}
