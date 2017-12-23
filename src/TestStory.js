"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*eslint-disable*/
const React = require("react");
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
const MaterialUtils_1 = require("./components/MaterialUtils");
const PleaseNoteDialog_1 = require("./components/PleaseNoteDialog");
class TestStory extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<MuiThemeProvider_1.default muiTheme={MaterialUtils_1.defaultMuiTheme}>
                <PleaseNoteDialog_1.PleaseNoteDialog _isLocal={"EN"} isProvider={false}/>
            </MuiThemeProvider_1.default>);
    }
}
exports.default = TestStory;
