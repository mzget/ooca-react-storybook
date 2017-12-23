"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const FollowUpPlanDialog_1 = require("./FollowUpPlanDialog");
// const FollowUpPlanDialogWithTheme = withMuiTheme(FollowUpPlanDialog);
class FollowUp extends React.Component {
    render() {
        const { onSubmit } = this.props;
        return (<div>
                <FollowUpPlanDialog_1.FollowUpPlanDialog isLocal={this.props.isLocal} onSubmit={(value) => onSubmit(value)}/>
            </div>);
    }
}
exports.FollowUp = FollowUp;
