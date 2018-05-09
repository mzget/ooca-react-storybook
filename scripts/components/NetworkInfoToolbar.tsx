import * as React from 'react';
import Paper from 'material-ui/Paper';

import Localized from "../Localized/index";
import { PrimaryDialogButton, LableDialog, DefaultParagraph, DialogHeader } from '../StyleComponents/DialogContentStyles';

const { reformated, DialogMessages } = Localized;

const style = {
    height: 50,
    width: "100%",
    // margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: "#f5a623",
};

export class NetworkInfoToolbar extends React.Component<{
    isLocal: string,
    isProvider: boolean,
    active: boolean,
    onClose: () => void
}> {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div>
                {(this.props.active) ?
                    <Paper style={style} zDepth={1}>
                        <DefaultParagraph fontsize={16} fontColor={`white`} style={{ marginTop: 10 }}>{DialogMessages.NetworkSpeed[reformated(this.props.isLocal)]}</DefaultParagraph>
                    </Paper> : null
                }
            </div>
        );
    }
}