import * as React from 'react';
import Paper from 'material-ui/Paper';
import Localized from "../Localized/index";
import { DefaultParagraph } from '../StyleComponents/DialogContentStyles';
const { reformated, DialogMessages } = Localized;
const style = {
    height: "100%",
    width: "100%",
    // margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: "#E65100",
};
export class NetworkInfoToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div>
                {(this.props.active) ?
            <Paper style={style} zDepth={1}>
                        <DefaultParagraph fontsize={16} fontColor={`white`}>{DialogMessages.NetworkSpeed[reformated(this.props.isLocal)]}</DefaultParagraph>
                    </Paper> : null}
            </div>);
    }
}
