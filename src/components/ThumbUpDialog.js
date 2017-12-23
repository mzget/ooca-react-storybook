"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const React = require("react");
const styled_components_1 = require("styled-components");
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
const MaterialUtils_1 = require("./MaterialUtils");
const Dialog_1 = require("material-ui/Dialog");
const UxUtils_1 = require("../UxUtils");
const AppUtils_1 = require("../AppUtils");
const Styles_1 = require("../StyleComponents/Styles");
const DialogContentStyles_1 = require("../StyleComponents/DialogContentStyles");
const down_icon_png_1 = require("../../Images/down_icon.png");
const up_icon_png_1 = require("../../Images/up_icon.png");
const MessageInfo_1 = require("../Localized/MessageInfo");
let thumbGap = 50;
let isSmall = window.innerWidth < 840;
const msgLabelFont = { fontSize: isSmall ? '17px' : '24px' };
let size = isSmall ? 80 : 120;
//   background: #0478d7;
const ThumbButton = styled_components_1.default.button.attrs({ className: 'button' }) `
    width: ${size}px;
    height: ${size}px;
    display: inline-block;
    cursor: pointer;
    min-width: 0px;
    padding: 0px;
    border-radius: 50%;
    background: ${(props) => props.provider ? '#0478d7' : '#02c3b6'};  
`;
class ThumbUpDialog extends React.Component {
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
            MessageInfo_1.FeedbackInfo.rating = true;
            handMSGState(AppUtils_1.MSGSteate.Feedback);
        }}>
                    <img style={imgStyle} src={up_icon_png_1.default} alt='Like'/>
                </ThumbButton>
                <ThumbButton provider={isProvider} style={{ marginLeft: (thumbGap / 2) + 'px' }} onClick={() => {
            MessageInfo_1.FeedbackInfo.rating = false;
            handMSGState(AppUtils_1.MSGSteate.Problem);
        }}>
                    <img style={imgStyle} src={down_icon_png_1.default} alt='UnLink'/>
                </ThumbButton>
            </div>);
    }
    render() {
        const { handMSGState, isLocal, isProvider } = this.props;
        return (<MuiThemeProvider_1.default muiTheme={MaterialUtils_1.defaultMuiTheme}>
                <Dialog_1.default contentStyle={{ maxWidth: UxUtils_1.getDialogWidth() }} bodyStyle={{ textAlign: 'center', padding: 0 }} actionsContainerStyle={{ padding: 0 }} actions={[]} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }}>
                    <Styles_1.PaddingBox>
                        <DialogContentStyles_1.DialogHeader fontsize={UxUtils_1.getFontSize()}>
                            {MessageInfo_1.MSGSteateInfo.Quality[isLocal]}
                        </DialogContentStyles_1.DialogHeader>
                        <div>
                            {this.renderThumb(isProvider)}
                        </div>
                    </Styles_1.PaddingBox>
                </Dialog_1.default>
            </MuiThemeProvider_1.default>);
    }
}
exports.ThumbUpDialog = ThumbUpDialog;
