/*eslint-disable*/
import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { defaultMuiTheme } from "./components/MaterialUtils";
import { PleaseNoteDialog } from "./components/PleaseNoteDialog";
class TestStory extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<MuiThemeProvider muiTheme={defaultMuiTheme}>
                <PleaseNoteDialog _isLocal={"EN"} isProvider={false}/>
            </MuiThemeProvider>);
    }
}
export default TestStory;
