"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
const getMuiTheme_1 = require("material-ui/styles/getMuiTheme");
const colors_1 = require("material-ui/styles/colors");
exports.defaultMuiTheme = getMuiTheme_1.default({
    palette: {
        primary1Color: '#0478d7',
        primary2Color: colors_1.blue500,
        primary3Color: colors_1.blue100,
    },
    fontFamily: 'Prompt',
});
function withMuiTheme(Comp) {
    return class withMuiTheme extends React.Component {
        render() {
            return (<MuiThemeProvider_1.default muiTheme={exports.defaultMuiTheme}>
                    <Comp {...this.props}/>
                </MuiThemeProvider_1.default>);
        }
    };
}
exports.withMuiTheme = withMuiTheme;
