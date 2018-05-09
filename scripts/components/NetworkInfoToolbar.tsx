import * as React from 'react';
import Paper from 'material-ui/Paper';

import Localized from "../Localized/index";
import { PrimaryDialogButton, LableDialog, ContentDialog, DialogHeader } from '../StyleComponents/DialogContentStyles';

const { reformated, DialogMessages } = Localized;

const style = {
    height: 40,
    width: "100%",
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
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
                        <ContentDialog>{DialogMessages.NetworkSpeed[reformated(this.props.isLocal)]}</ContentDialog>
                    </Paper> : null
                }
            </div>
        );
    }
}