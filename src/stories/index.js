import * as React from "react";
import "bulma/css/bulma.css";
import "../css/app-ooca.css";
import "../css/App.css";
import "../css/ooca-custom.css";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { storiesOf } from "@storybook/react";
import { Button, Welcome } from "@storybook/react/demo";
import { FeedbackDialog, PleaseNoteDialog, ProblemDialog, ThankyouDialog, ThumbUpDialog, withMuiTheme, } from "../components/index";
import { FollowUpPlanDialog } from "../components/Providers/FollowUpPlanDialog";
import { FollowUpSuccessDialog } from "../components/Providers/FollowUpSuccessDialog";
import ProviderIndex from "../containers/ProviderIndex";
import TestRSModal from "../TestRSModal";
import TestStory from "../TestStory";
const TestStoryWithTheme = withMuiTheme(TestStory);
const ProblemDialogWithTheme = withMuiTheme(ProblemDialog);
const FeedbackDialogWithTheme = withMuiTheme(FeedbackDialog);
const ThankyouDialogWithTheme = withMuiTheme(ThankyouDialog);
const PleaseNoteDialogWithTheme = withMuiTheme(PleaseNoteDialog);
const FollowUpPlanDialogWithTheme = withMuiTheme(FollowUpPlanDialog);
const FollowUpSuccessDialogWithTheme = withMuiTheme(FollowUpSuccessDialog);
storiesOf("Welcome", module)
    .add("to Storybook", () => <Welcome showApp={linkTo("Button")}/>);
storiesOf("OOCA-Storybook", module)
    .add("user-payment-summary-modal", () => <TestRSModal Local={"TH"} isProvider={false} AppointmentID={"1"}/>)
    .add("provider-payment-summary-modal", () => <TestRSModal Local={"TH"} isProvider={true} AppointmentID={"1"}/>);
// .add('TestStory-Modal', () => <TestStoryWithTheme />);
storiesOf("OOCA-user-modals", module)
    .add("thumbup-dialog", () => <ThumbUpDialog isLocal={"EN"} isProvider={false} handMSGState={action("Thumb")}/>)
    .add("thumbup-dialog-TH", () => <ThumbUpDialog isLocal={"TH"} isProvider={false} handMSGState={action("Thumb")}/>)
    .add("thankyou-dialog", () => <ThankyouDialogWithTheme isLocal={"EN"} isProvider={false} handleClose={action("handleClose")} handCallBack={action("handCallBack")}/>)
    .add("thankyou-dialog-TH", () => <ThankyouDialogWithTheme isLocal={"TH"} isProvider={false} handleClose={action("handleClose")} handCallBack={action("handCallBack")}/>)
    .add("problem-dialog", () => <ProblemDialogWithTheme _isLocal={"EN"} _isProvider={false} SendFeedback={() => action("send")} handMSGState={(state) => action(state)}/>)
    .add("problem-dialog-TH", () => <ProblemDialogWithTheme _isLocal={"TH"} _isProvider={false} SendFeedback={() => action("send")} handMSGState={(state) => action(state)}/>)
    .add("feedback-dialog", () => <FeedbackDialogWithTheme _isLocal={"EN"} _isProvider={false} SendFeedback={() => action("send")} handMSGState={(state) => action(state)}/>)
    .add("feedback-dialog-TH", () => <FeedbackDialogWithTheme _isLocal={"TH"} _isProvider={false} SendFeedback={() => action("send")} handMSGState={(state) => action(state)}/>)
    .add("pleasenote-dialog", () => <PleaseNoteDialogWithTheme _isLocal={"EN"} isProvider={false} onClose={action("close")}/>)
    .add("pleasenote-dialog-TH", () => <PleaseNoteDialogWithTheme _isLocal={"TH"} isProvider={false} onClose={action("close")}/>);
storiesOf("OOCA-provider-modals/Feedback", module)
    .add("thumbup-dialog", () => <ThumbUpDialog isLocal={"EN"} isProvider={true} handMSGState={action("Thumb")}/>)
    .add("thumbup-dialog-TH", () => <ThumbUpDialog isLocal={"TH"} isProvider={true} handMSGState={action("Thumb")}/>)
    .add("thankyou-dialog", () => <ThankyouDialogWithTheme isLocal={"EN"} isProvider={true} handleClose={action("handleClose")} handCallBack={action("handCallBack")}/>)
    .add("thankyou-dialog-TH", () => <ThankyouDialogWithTheme isLocal={"TH"} isProvider={true} handleClose={action("handleClose")} handCallBack={action("handCallBack")}/>)
    .add("problem-dialog", () => <ProblemDialogWithTheme _isLocal={"EN"} _isProvider={true} SendFeedback={() => action("send")} handMSGState={(state) => action(state)}/>)
    .add("problem-dialog-TH", () => <ProblemDialogWithTheme _isLocal={"TH"} _isProvider={true} SendFeedback={() => action("send")} handMSGState={(state) => action(state)}/>)
    .add("feedback-dialog", () => <FeedbackDialogWithTheme _isLocal={"EN"} _isProvider={true} SendFeedback={() => action("send")} handMSGState={(state) => action(state)}/>)
    .add("feedback-dialog-TH", () => <FeedbackDialogWithTheme _isLocal={"TH"} _isProvider={true} SendFeedback={() => action("send")} handMSGState={(state) => action(state)}/>)
    .add("pleasenote-dialog", () => <PleaseNoteDialogWithTheme _isLocal={"EN"} isProvider={true} onClose={action("close")}/>)
    .add("pleasenote-dialog-TH", () => <PleaseNoteDialogWithTheme _isLocal={"TH"} isProvider={true} onClose={action("close")}/>);
storiesOf("OOCA-provider-modals/FollowUp", module)
    .add("FollowModal", () => <FollowUpPlanDialogWithTheme isLocal={"EN"} onSubmit={(value) => { console.log(value); action(value); }}/>)
    .add("FollowModal-TH", () => <FollowUpPlanDialogWithTheme isLocal={"TH"} onSubmit={(value) => { console.log(value); action(value); }}/>)
    .add("FollowUpSuccess", () => <FollowUpSuccessDialogWithTheme isLocal={"EN"} isProvider={true} onClose={(value) => { console.log(value); action(value); }}/>)
    .add("FollowUpSuccess-TH", () => <FollowUpSuccessDialogWithTheme isLocal={"TH"} isProvider={true} onClose={(value) => { console.log(value); action(value); }}/>);
storiesOf("OOCA-Alerts", module)
    .add("BlockVideoService", () => <ProviderIndex Local={"EN"} Show={true} onClose={() => action("close")}/>)
    .add("BlockVideoService-TH", () => <ProviderIndex Local={"TH"} Show={true} onClose={() => action("close")}/>);
storiesOf("OOCA-Button", module)
    .add("User-Primary-dialog-button", () => <Button onClick={action("clicked")}>Hello Button</Button>);
