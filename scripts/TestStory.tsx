/*eslint-disable*/
import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { defaultMuiTheme } from "./components/MaterialUtils";
import ThankyouDialog from './components/ThankyouDialog';
import { ThumbUpDialog } from "./components/ThumbUpDialog";
import { PleaseNoteDialog } from "./components/PleaseNoteDialog";

export class TestStory extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            // <ThumbUpDialog _isLocal={'EN'} _isProvider={false} handMSGState={() => { }} />

            <PleaseNoteDialog _isLocal={'EN'} isProvider={false} />
        );
    }
}