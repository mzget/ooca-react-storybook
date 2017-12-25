import * as React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import LinearProgress from 'material-ui/LinearProgress';
import { defaultMuiTheme } from '../components/MaterialUtils';
import { getDialogWidth } from '../UxUtils';
import { PaddingBox, Header } from './ModalComps';
/**
 * Draw Indeterminate Dialog
 * @param {boolean} isModal
 * @param {boolean} isOpen
 * @param {function} handleClose
 * @param {string} message
 */
export const IndeterminateDialog = (props) => {
    return (<MuiThemeProvider muiTheme={defaultMuiTheme}>
            <Dialog modal={props.isModal === undefined ? true : props.isModal} open={props.isOpen === undefined ? true : props.isOpen} bodyStyle={{ padding: '20px 0px 0px 0px' }} contentStyle={{ maxWidth: getDialogWidth() }} autoScrollBodyContent={true}>
                <PaddingBox>
                    <Header>{props.message}</Header>
                    <div style={{ padding: '0px 10px 0px 10px', marginBottom: '30px' }}>
                        <LinearProgress mode='indeterminate'/>
                    </div>
                </PaddingBox>
            </Dialog>
        </MuiThemeProvider>);
};
