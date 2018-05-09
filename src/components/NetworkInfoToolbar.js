import * as React from 'react';
import Paper from 'material-ui/Paper';
import Localized from "../Localized/index";
import { DefaultParagraph } from '../StyleComponents/DialogContentStyles';
const { reformated, DialogMessages } = Localized;
const style = {
    height: 50,
    width: "100%",
    // margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: "#f5a623",
};
export var NetworkMessageEnum;
(function (NetworkMessageEnum) {
    NetworkMessageEnum[NetworkMessageEnum["networkSpeed"] = 0] = "networkSpeed";
    NetworkMessageEnum[NetworkMessageEnum["disableVideo"] = 1] = "disableVideo";
})(NetworkMessageEnum || (NetworkMessageEnum = {}));
export class NetworkInfoToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div>
                {(this.props.active) ?
            <Paper style={style} zDepth={1}>
                        <DefaultParagraph fontsize={14} fontColor={`white`} style={{ marginTop: 10 }}>
                            {(this.props.case === NetworkMessageEnum[NetworkMessageEnum.networkSpeed]) ?
                DialogMessages.NetworkSpeed[reformated(this.props.isLocal)] :
                DialogMessages.VideoSpeedWarning[reformated(this.props.isLocal)]}
                        </DefaultParagraph>
                    </Paper> : null}
            </div>);
    }
}
