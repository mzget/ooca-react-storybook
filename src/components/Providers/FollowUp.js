import * as React from 'react';
import { FollowUpPlanDialog } from './FollowUpPlanDialog';
// const FollowUpPlanDialogWithTheme = withMuiTheme(FollowUpPlanDialog);
export class FollowUp extends React.Component {
    render() {
        const { onSubmit } = this.props;
        return (<div>
                <FollowUpPlanDialog isLocal={this.props.isLocal} onSubmit={(value) => onSubmit(value)}/>
            </div>);
    }
}
