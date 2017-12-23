"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("bulma/css/bulma.css");
require("../css/app-ooca.css");
require("../css/App.css");
require("../css/ooca-custom.css");
const addon_actions_1 = require("@storybook/addon-actions");
const addon_links_1 = require("@storybook/addon-links");
const react_1 = require("@storybook/react");
const demo_1 = require("@storybook/react/demo");
const index_1 = require("../components/index");
const FollowUpPlanDialog_1 = require("../components/Providers/FollowUpPlanDialog");
const FollowUpSuccessDialog_1 = require("../components/Providers/FollowUpSuccessDialog");
const ProviderIndex_1 = require("../containers/ProviderIndex");
const TestRSModal_1 = require("../TestRSModal");
const TestStory_1 = require("../TestStory");
const TestStoryWithTheme = index_1.withMuiTheme(TestStory_1.TestStory);
const ProblemDialogWithTheme = index_1.withMuiTheme(index_1.ProblemDialog);
const FeedbackDialogWithTheme = index_1.withMuiTheme(index_1.FeedbackDialog);
const ThankyouDialogWithTheme = index_1.withMuiTheme(index_1.ThankyouDialog);
const PleaseNoteDialogWithTheme = index_1.withMuiTheme(index_1.PleaseNoteDialog);
const FollowUpPlanDialogWithTheme = index_1.withMuiTheme(FollowUpPlanDialog_1.FollowUpPlanDialog);
const FollowUpSuccessDialogWithTheme = index_1.withMuiTheme(FollowUpSuccessDialog_1.FollowUpSuccessDialog);
react_1.storiesOf("Welcome", module)
    .add("to Storybook", () => <demo_1.Welcome showApp={addon_links_1.linkTo("Button")}/>);
react_1.storiesOf("OOCA-Storybook", module)
    .add("user-payment-summary-modal", () => <TestRSModal_1.default Local={"TH"} isProvider={false} AppointmentID={"1"}/>)
    .add("provider-payment-summary-modal", () => <TestRSModal_1.default Local={"TH"} isProvider={true} AppointmentID={"1"}/>);
// .add('TestStory-Modal', () => <TestStoryWithTheme />);
react_1.storiesOf("OOCA-user-modals", module)
    .add("thumbup-dialog", () => <index_1.ThumbUpDialog isLocal={"EN"} isProvider={false} handMSGState={addon_actions_1.action("Thumb")}/>)
    .add("thumbup-dialog-TH", () => <index_1.ThumbUpDialog isLocal={"TH"} isProvider={false} handMSGState={addon_actions_1.action("Thumb")}/>)
    .add("thankyou-dialog", () => <ThankyouDialogWithTheme isLocal={"EN"} isProvider={false} handleClose={addon_actions_1.action("handleClose")} handCallBack={addon_actions_1.action("handCallBack")}/>)
    .add("thankyou-dialog-TH", () => <ThankyouDialogWithTheme isLocal={"TH"} isProvider={false} handleClose={addon_actions_1.action("handleClose")} handCallBack={addon_actions_1.action("handCallBack")}/>)
    .add("problem-dialog", () => <ProblemDialogWithTheme _isLocal={"EN"} _isProvider={false} SendFeedback={() => addon_actions_1.action("send")} handMSGState={(state) => addon_actions_1.action(state)}/>)
    .add("problem-dialog-TH", () => <ProblemDialogWithTheme _isLocal={"TH"} _isProvider={false} SendFeedback={() => addon_actions_1.action("send")} handMSGState={(state) => addon_actions_1.action(state)}/>)
    .add("feedback-dialog", () => <FeedbackDialogWithTheme _isLocal={"EN"} _isProvider={false} SendFeedback={() => addon_actions_1.action("send")} handMSGState={(state) => addon_actions_1.action(state)}/>)
    .add("feedback-dialog-TH", () => <FeedbackDialogWithTheme _isLocal={"TH"} _isProvider={false} SendFeedback={() => addon_actions_1.action("send")} handMSGState={(state) => addon_actions_1.action(state)}/>)
    .add("pleasenote-dialog", () => <PleaseNoteDialogWithTheme _isLocal={"EN"} isProvider={false} onClose={addon_actions_1.action("close")}/>)
    .add("pleasenote-dialog-TH", () => <PleaseNoteDialogWithTheme _isLocal={"TH"} isProvider={false} onClose={addon_actions_1.action("close")}/>);
react_1.storiesOf("OOCA-provider-modals/Feedback", module)
    .add("thumbup-dialog", () => <index_1.ThumbUpDialog isLocal={"EN"} isProvider={true} handMSGState={addon_actions_1.action("Thumb")}/>)
    .add("thumbup-dialog-TH", () => <index_1.ThumbUpDialog isLocal={"TH"} isProvider={true} handMSGState={addon_actions_1.action("Thumb")}/>)
    .add("thankyou-dialog", () => <ThankyouDialogWithTheme isLocal={"EN"} isProvider={true} handleClose={addon_actions_1.action("handleClose")} handCallBack={addon_actions_1.action("handCallBack")}/>)
    .add("thankyou-dialog-TH", () => <ThankyouDialogWithTheme isLocal={"TH"} isProvider={true} handleClose={addon_actions_1.action("handleClose")} handCallBack={addon_actions_1.action("handCallBack")}/>)
    .add("problem-dialog", () => <ProblemDialogWithTheme _isLocal={"EN"} _isProvider={true} SendFeedback={() => addon_actions_1.action("send")} handMSGState={(state) => addon_actions_1.action(state)}/>)
    .add("problem-dialog-TH", () => <ProblemDialogWithTheme _isLocal={"TH"} _isProvider={true} SendFeedback={() => addon_actions_1.action("send")} handMSGState={(state) => addon_actions_1.action(state)}/>)
    .add("feedback-dialog", () => <FeedbackDialogWithTheme _isLocal={"EN"} _isProvider={true} SendFeedback={() => addon_actions_1.action("send")} handMSGState={(state) => addon_actions_1.action(state)}/>)
    .add("feedback-dialog-TH", () => <FeedbackDialogWithTheme _isLocal={"TH"} _isProvider={true} SendFeedback={() => addon_actions_1.action("send")} handMSGState={(state) => addon_actions_1.action(state)}/>)
    .add("pleasenote-dialog", () => <PleaseNoteDialogWithTheme _isLocal={"EN"} isProvider={true} onClose={addon_actions_1.action("close")}/>)
    .add("pleasenote-dialog-TH", () => <PleaseNoteDialogWithTheme _isLocal={"TH"} isProvider={true} onClose={addon_actions_1.action("close")}/>);
react_1.storiesOf("OOCA-provider-modals/FollowUp", module)
    .add("FollowModal", () => <FollowUpPlanDialogWithTheme isLocal={"EN"} onSubmit={(value) => { console.log(value); addon_actions_1.action(value); }}/>)
    .add("FollowModal-TH", () => <FollowUpPlanDialogWithTheme isLocal={"TH"} onSubmit={(value) => { console.log(value); addon_actions_1.action(value); }}/>)
    .add("FollowUpSuccess", () => <FollowUpSuccessDialogWithTheme isLocal={"EN"} isProvider={true} onClose={(value) => { console.log(value); addon_actions_1.action(value); }}/>)
    .add("FollowUpSuccess-TH", () => <FollowUpSuccessDialogWithTheme isLocal={"TH"} isProvider={true} onClose={(value) => { console.log(value); addon_actions_1.action(value); }}/>);
react_1.storiesOf("OOCA-Alerts", module)
    .add("BlockVideoService", () => <ProviderIndex_1.default Local={"EN"} Show={true} onClose={() => addon_actions_1.action("close")}/>)
    .add("BlockVideoService-TH", () => <ProviderIndex_1.default Local={"TH"} Show={true} onClose={() => addon_actions_1.action("close")}/>);
react_1.storiesOf("OOCA-Button", module)
    .add("User-Primary-dialog-button", () => <demo_1.Button onClick={addon_actions_1.action("clicked")}>Hello Button</demo_1.Button>);
