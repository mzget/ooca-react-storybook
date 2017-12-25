/* eslint-disable */

import * as React from 'react';
import './css/App.css';
import './css/ooca-custom.css';

import axios from 'axios';
import styled from 'styled-components';

import { Config } from './Configs';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RadioButton from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import LinearProgress from 'material-ui/LinearProgress';

import { withMuiTheme } from './components/MaterialUtils';
import { WordingInfo } from './Localized/WordingInfo.js'
import { MSGSteateInfo, SendInfo, FeedbackInfo, options } from './Localized/MessageInfo.js'
import { BottomButtonDialog, ButtonLines } from './components/DialogContent';
import { PaddingBox, Header } from './components/ModalComps';
//user:patient@ooca.co
//password:secret

import { ThumbUpDialog } from './components/ThumbUpDialog';
import { FeedbackDialog } from './components/FeedbackDialog';
import { PleaseNoteDialog } from './components/PleaseNoteDialog';
import { IndeterminateDialog } from './components/IndeterminateDialog';
import { ProblemDialog } from "./components/ProblemDialog";
import { ThankyouDialog } from "./components/ThankyouDialog";
import { FollowUpPlanDialog } from "./components/Providers/FollowUpPlanDialog";
import { FollowUpSuccessDialog } from './components/Providers/FollowUpSuccessDialog';

const MSGSteate = {
  Quality: 'Quality',
  Feedback: 'Feedback',
  Problem: 'Problem',
  Thank: 'Thank',
  SendMSG: 'SendMSG',
  SendFail: 'SendFail',
  Note: 'Note',
  FollowUp: 'FollowUp',
  FollowUpFinish: 'FollowUpFinish'
};
var _isLocal;
var _isProvider = false;
var _AppointmentID;
var _Token;
var _Property;
var _BaseURL;

const style = { marginRight: 20, };
const RaisedBtnBoxStyle = { paddingTop: '10px', margin: '0px 5px 0px 5px' };

const InputRadio = (props) => {
  return (
    <div className="control">
      <label className="radio">
        <input type="radio" name={props.name} value={props.value}
          checked={props.checked} onClick={props.onClick} style={{ display: 'inline-block' }}
        />
        <div style={{ paddingLeft: 10, display: 'inline-block' }}>{props.text}</div>
      </label>
    </div>
  );
}

const FeedbackDialogWithTheme = withMuiTheme(FeedbackDialog);
const ProblemDialogWithTheme = withMuiTheme(ProblemDialog);
const ThankyouDialogWithTheme = withMuiTheme(ThankyouDialog);
const PleaseNoteDialogWithTheme = withMuiTheme(PleaseNoteDialog);
const FollowUpPlanDialogWithTheme = withMuiTheme(FollowUpPlanDialog);
const FollowUpSuccessDialogWithTheme = withMuiTheme(FollowUpSuccessDialog);

class TestRSModal extends React.Component<any, any> {
  constructor(props) {
    super(props);
    console.warn('### : ', this.props);

    const { AppointmentID, Local, Token, isProvider, Property, baseURL } = this.props;

    this.state = {
      open: (!!AppointmentID) ? true : false,
      MessageState: MSGSteate.Quality,
      anchorOrigin: { anchorOrigin: '' }
    };

    _isLocal = (!!Local) ? (Local.toUpperCase().match(/EN/i) ? 'EN' : 'TH') : 'EN';
    _isProvider = (!!isProvider) ? isProvider : false;
    _AppointmentID = AppointmentID;
    _Property = () => Property;
    _Token = Token;
    _BaseURL = baseURL;

    this.handMSGState = this.handMSGState.bind(this);
    this.submitFollowPlan = this.submitFollowPlan.bind(this);
  }
  // componentDidMount(){
  //   let self = this;
  //   this.setState({open:false});
  //   setTimeout(()=>{
  //     self.setState({open:true});
  //   },2000);
  // }
  render() {
    return (
      <div className='message-panel'>
        {this.DisplayMessage(this.state.MessageState)}
      </div>
    );
  }

  DisplayMessage(_state) {
    let visibleState = [MSGSteate.Quality, MSGSteate.Feedback, MSGSteate.SendMSG, MSGSteate.SendFail];
    if (_isProvider) {
      visibleState.push(MSGSteate.Note);
      visibleState.push(MSGSteate.FollowUp);
    }
    let _isActive = visibleState.indexOf(_state) != -1;
    //1 (_state===MSGSteate.Feedback)||(_state===MSGSteate.SendMSG)||(_state===MSGSteate.Quality)
    //2 (_state===MSGSteate.Problem)||(_state===MSGSteate.Thank)

    return this.ActiveOnState(_state);
  }

  handleOpen = () => { this.setState({ open: true }); };
  handleClose = () => { this.setState({ open: false, MessageState: MSGSteate.Quality, anchorOrigin: { anchorOrigin: '' } }); };

  handCallBack() {
    if (!!_Property)
      _Property();
  }

  handMSGState(_state) {
    this.setState({ MessageState: _state }, () => {
      console.log('state', this.state.MessageState);
    })
  }

  handFeedbackInfo() {
    FeedbackInfo.rating = true;
    FeedbackInfo.problem = null;
    FeedbackInfo.problem_other = null;
    FeedbackInfo.feedback = null;
  }

  setAnchor = (positionElement, position) => {
    const { anchorOrigin } = this.state;
    anchorOrigin[positionElement] = position;

    FeedbackInfo.problem = anchorOrigin.vertical;
    this.setState({ anchorOrigin: anchorOrigin, });
  };

  ActiveOnState(_state) {
    const TextArea = styled.textarea.attrs(
      { cols: 30, rows: 4, className: 'textarea full-width bottom-space' }
    ) `outline: none; -webkit-tap-highlight-color:transparent;`;
    // console.log("ActiveOnState: ",_state);
    switch (_state) {
      case MSGSteate.Quality:
        {
          return (
            <ThumbUpDialog isLocal={_isLocal} isProvider={_isProvider} handMSGState={this.handMSGState} />
          );
        }
      case MSGSteate.Feedback:
        {
          return (
            <FeedbackDialogWithTheme _isLocal={_isLocal}
              _isProvider={_isProvider}
              SendFeedback={this.SendFeedback.bind(this)}
              handMSGState={this.handMSGState.bind(this)}
            />);
        }
      case MSGSteate.Problem:
        {
          return (
            <ProblemDialogWithTheme
              _isLocal={_isLocal}
              _isProvider={_isProvider}
              SendFeedback={this.SendFeedback.bind(this)}
              handMSGState={this.handMSGState.bind(this)} />
          );
        }

      case MSGSteate.SendMSG: {
        return (
          <IndeterminateDialog isModal={true} isOpen={true}
            message={MSGSteateInfo.SendMSG[_isLocal]} />
        );
      }

      case MSGSteate.Thank:
        {
          return (<ThankyouDialogWithTheme isLocal={_isLocal} isProvider={_isProvider}
            handCallBack={this.handCallBack.bind(this)}
            handleClose={() => {
              this.handMSGState(MSGSteate.Note);
            }} />
          );
        }
      case MSGSteate.Note: {
        return (<PleaseNoteDialogWithTheme _isLocal={_isLocal} isProvider={_isProvider} onClose={() => {
          if (_isProvider) {
            this.handMSGState(MSGSteate.FollowUp);
          }
          else {
            this.handMSGState('');
          }
        }} />);
      }
      case MSGSteate.FollowUp: {
        return <FollowUpPlanDialogWithTheme isLocal={_isLocal} onSubmit={this.submitFollowPlan} />;
      }
      case MSGSteate.FollowUpFinish: {
        return <FollowUpSuccessDialogWithTheme isLocal={_isLocal} isProvider={_isProvider} onClose={() => {
          this.handMSGState('');
        }} />
      }
      default: {
        return null;
      }
    }
  }

  SendFeedback() {
    //const Feedback_API = (!!_BaseURL) ? `${_BaseURL}appointments/${_AppointmentID}/provider-feedback` : `${Config().api_feedback}/${(!!_AppointmentID) ? _AppointmentID : '1'}/provider-feedback`;
    const postInfo = {
      baseURL: ((!!_BaseURL) ? _BaseURL : Config().api_feedback),
      appointmentID: (!!_AppointmentID) ? _AppointmentID : 1,
      apiTail: (_isProvider ? 'provider' : 'user') + '-feedback'
    }
    const Feedback_API = `${postInfo.baseURL}appointments/${postInfo.appointmentID}/${postInfo.apiTail}`

    console.log("### FeedbackInfo :", JSON.stringify(FeedbackInfo), ' api : ', Feedback_API);
    const header = { 'Content-Type': 'application/json', 'Authorization': _Token }; //Authorization':`Bearer${'jwt token'}`
    const request = axios({ url: Feedback_API, method: 'POST', headers: header, data: FeedbackInfo, dataType: 'json', });

    request.then((response) => {
      console.log("FeedbackInfo success: ", response);
      if (this.state.MessageState === MSGSteate.SendMSG)
        this.handMSGState(MSGSteate.Thank);

      this.handFeedbackInfo();
    }).catch((error) => {
      console.log("FeedbackInfo fail", error);
      if (this.state.MessageState === MSGSteate.SendMSG)
        this.handMSGState(MSGSteate.Thank);
      //this.handMSGState(MSGSteate.Fail);
      this.handFeedbackInfo();
    })
  }

  submitFollowPlan(data) {
    const postInfo = {
      baseURL: ((!!_BaseURL) ? _BaseURL : Config().api_feedback),
      appointmentID: (!!_AppointmentID) ? _AppointmentID : 1
    }
    const followUp_api = `${postInfo.baseURL}appointments/${postInfo.appointmentID}/followup`;

    fetch(`${followUp_api}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': _Token
      },
      body: JSON.stringify({
        followup: data
      })
    }).then(response => response.json())
      .then(result => {
        console.log('followup finish', result);
        this.handMSGState(MSGSteate.FollowUpFinish);
      }).catch(err => {
        console.warn('followup fail', err);
        this.handMSGState(MSGSteate.FollowUpFinish);
      });
  }
}

export default TestRSModal;
