/*eslint-disable*/
import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { defaultMuiTheme } from "./components/MaterialUtils";
import { NetworkInfoDialog } from "./components/NetworkInfoDialog";
class TestStory extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<MuiThemeProvider muiTheme={defaultMuiTheme}>
                <NetworkInfoDialog _isLocal={"EN"} isProvider={false}/>
            </MuiThemeProvider>);
    }
}
export default TestStory;
