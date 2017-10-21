import * as React from 'react';
import 'bulma/css/bulma.css';
import '../css/App.css';
import '../css/app-ooca.css';
import '../css/ooca-custom.css';
import { storiesOf } from '@storybook/react';
import { Button, Welcome } from '@storybook/react/demo';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';
import { PleaseNoteDialog, ThumbUpDialog, ProblemDialog, FeedbackDialog, ThankyouDialog, withMuiTheme } from "../components/index";
import TestRSModal from '../TestRSModal';
import { TestStory } from '../TestStory';
const TestStoryWithTheme = withMuiTheme(TestStory);
const ProblemDialogWithTheme = withMuiTheme(ProblemDialog);
storiesOf('Welcome', module)
    .add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);
storiesOf('Button', module)
    .add('User-Primary-dialog-button', () => <Button onClick={action('clicked')}>Hello Button</Button>);
storiesOf('OOCA-Storybook', module)
    .add('user-payment-summary-modal', () => <TestRSModal Local={'TH'} isProvider={false} AppointmentID={'1'}/>)
    .add('provider-payment-summary-modal', () => <TestRSModal Local={'TH'} isProvider={true} AppointmentID={'1'}/>)
    .add('TestStory-Modal', () => <TestStoryWithTheme />);
storiesOf('OOCA-user-modals', module)
    .add('thumbup-dialog', () => <ThumbUpDialog isLocal={'EN'} isProvider={false} handMSGState={action('Thumb')}/>)
    .add('thumbup-dialog-TH', () => <ThumbUpDialog isLocal={'TH'} isProvider={false} handMSGState={action('Thumb')}/>)
    .add('thankyou-dialog', () => <ThankyouDialog isLocal={'EN'} isProvider={false} handleClose={action('handleClose')} handCallBack={action('handCallBack')}/>)
    .add('thankyou-dialog-TH', () => <ThankyouDialog isLocal={'TH'} isProvider={false} handleClose={action('handleClose')} handCallBack={action('handCallBack')}/>)
    .add('problem-dialog', () => <ProblemDialogWithTheme _isLocal={'EN'} _isProvider={false} SendFeedback={() => action('send')} handMSGState={(state) => action(state)}/>)
    .add('problem-dialog-TH', () => <ProblemDialogWithTheme _isLocal={'TH'} _isProvider={false} SendFeedback={() => action('send')} handMSGState={(state) => action(state)}/>)
    .add('feedback-dialog', () => <FeedbackDialog _isLocal={'EN'} _isProvider={false} SendFeedback={() => action('send')} handMSGState={(state) => action(state)}/>)
    .add('feedback-dialog-TH', () => <FeedbackDialog _isLocal={'TH'} _isProvider={false} SendFeedback={() => action('send')} handMSGState={(state) => action(state)}/>)
    .add('pleasenote-dialog', () => <PleaseNoteDialog _isLocal={'EN'} isProvider={false} onClose={action('close')}/>)
    .add('pleasenote-dialog-TH', () => <PleaseNoteDialog _isLocal={'TH'} isProvider={false} onClose={action('close')}/>);
storiesOf('OOCA-provider-modals', module)
    .add('thumbup-dialog', () => <ThumbUpDialog isLocal={'EN'} isProvider={true} handMSGState={action('Thumb')}/>)
    .add('thumbup-dialog-TH', () => <ThumbUpDialog isLocal={'TH'} isProvider={true} handMSGState={action('Thumb')}/>)
    .add('thankyou-dialog', () => <ThankyouDialog isLocal={'EN'} isProvider={true} handleClose={action('handleClose')} handCallBack={action('handCallBack')}/>)
    .add('thankyou-dialog-TH', () => <ThankyouDialog isLocal={'TH'} isProvider={true} handleClose={action('handleClose')} handCallBack={action('handCallBack')}/>)
    .add('problem-dialog', () => <ProblemDialogWithTheme _isLocal={'EN'} _isProvider={true} SendFeedback={() => action('send')} handMSGState={(state) => action(state)}/>)
    .add('problem-dialog-TH', () => <ProblemDialogWithTheme _isLocal={'TH'} _isProvider={true} SendFeedback={() => action('send')} handMSGState={(state) => action(state)}/>)
    .add('feedback-dialog', () => <FeedbackDialog _isLocal={'EN'} _isProvider={true} SendFeedback={() => action('send')} handMSGState={(state) => action(state)}/>)
    .add('feedback-dialog-TH', () => <FeedbackDialog _isLocal={'TH'} _isProvider={true} SendFeedback={() => action('send')} handMSGState={(state) => action(state)}/>)
    .add('pleasenote-dialog', () => <PleaseNoteDialog _isLocal={'EN'} isProvider={true} onClose={action('close')}/>)
    .add('pleasenote-dialog-TH', () => <PleaseNoteDialog _isLocal={'TH'} isProvider={true} onClose={action('close')}/>);
