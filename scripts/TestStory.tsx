/*eslint-disable*/
import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { defaultMuiTheme } from "./components/MaterialUtils";
import { ThankyouDialog } from './components/ThankyouDialog';
import { ThumbUpDialog } from "./components/ThumbUpDialog";
import { PleaseNoteDialog } from "./components/PleaseNoteDialog";
import { NetworkInfoDialog } from "./components/NetworkInfoDialog";

class TestStory extends React.Component {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <MuiThemeProvider muiTheme={defaultMuiTheme}>
                <NetworkInfoDialog _isLocal={"EN"} isProvider={false} />
            </MuiThemeProvider>
        );
    }
}

export default TestStory;
