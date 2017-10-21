/* eslint-disable */
import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500, blue900, blue100 } from 'material-ui/styles/colors';
export const defaultMuiTheme = getMuiTheme({
    palette: {
        primary1Color: blue900,
        primary2Color: blue500,
        primary3Color: blue100,
    },
    fontFamily: ``
});
export function withMuiTheme(Comp) {
    return class withMuiTheme extends React.Component {
        render() {
            return (<MuiThemeProvider muiTheme={defaultMuiTheme}>
                    <Comp {...this.props}/>
                </MuiThemeProvider>);
        }
    };
}
