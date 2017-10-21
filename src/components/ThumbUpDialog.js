/* eslint-disable */
import * as React from 'react';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { defaultMuiTheme } from "./MaterialUtils";
import Dialog from 'material-ui/Dialog';
import { MSGSteate } from '../AppUtils';
import { PaddingBox } from '../StyleComponents/Styles';
import { DialogHeader } from '../StyleComponents/DialogContentStyles';
import IconDown from '../../Images/down_icon.png';
import IconUp from '../../Images/up_icon.png';
import { MSGSteateInfo, FeedbackInfo } from '../Localized/MessageInfo';
let thumbGap = 50;
let isSmall = window.innerWidth < 800;
const msgLabelFont = { fontSize: isSmall ? '17px' : '24px' };
let size = isSmall ? 80 : 120;
//   background: #0478d7;
const ThumbButton = styled.button.attrs({ className: 'button' }) `
    width: ${size}px;
    height: ${size}px;
    display: inline-block;
    cursor: pointer;
    min-width: 0px;
    padding: 0px;
    border-radius: 50%;
    background: ${(props) => props.provider ? '#0478d7' : '#02c3b6'};  
`;
export class ThumbUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.renderThumb = this.renderThumb.bind(this);
        this.state = {
            open: true
        };
    }
    renderThumb(isProvider) {
        const { handMSGState } = this.props;
        let imgStyle = { width: '100%', height: '100%' };
        return (<div>
                <ThumbButton provider={isProvider} style={{ marginRight: (thumbGap / 2) + 'px' }} onClick={() => {
            FeedbackInfo.rating = true;
            handMSGState(MSGSteate.Feedback);
        }}>
                    <img style={imgStyle} src={IconUp} alt='Like'/>
                </ThumbButton>
                <ThumbButton provider={isProvider} style={{ marginLeft: (thumbGap / 2) + 'px' }} onClick={() => {
            FeedbackInfo.rating = false;
            handMSGState(MSGSteate.Problem);
        }}>
                    <img style={imgStyle} src={IconDown} alt='UnLink'/>
                </ThumbButton>
            </div>);
    }
    render() {
        const { handMSGState, isLocal, isProvider } = this.props;
        return (<MuiThemeProvider muiTheme={defaultMuiTheme}>
                <Dialog contentStyle={{ maxWidth: '500px', minWidth: '400px' }} bodyStyle={{ textAlign: 'center', padding: 0 }} actionsContainerStyle={{ padding: 0 }} actions={[]} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }}>
                    <PaddingBox>
                        <div style={{ paddingTop: '20px', marginBottom: '40px' }}>
                            <DialogHeader>
                                {MSGSteateInfo.Quality[isLocal]}
                            </DialogHeader>
                        </div>
                        <div>
                            {this.renderThumb(isProvider)}
                        </div>
                    </PaddingBox>
                </Dialog>
            </MuiThemeProvider>);
    }
}
