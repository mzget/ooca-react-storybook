"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
const Dialog_1 = require("material-ui/Dialog");
const LinearProgress_1 = require("material-ui/LinearProgress");
const MaterialUtils_1 = require("../components/MaterialUtils");
const UxUtils_1 = require("../UxUtils");
const ModalComps_1 = require("./ModalComps");
/**
 * Draw Indeterminate Dialog
 * @param {boolean} isModal
 * @param {boolean} isOpen
 * @param {function} handleClose
 * @param {string} message
 */
exports.IndeterminateDialog = (props) => {
    return (<MuiThemeProvider_1.default muiTheme={MaterialUtils_1.defaultMuiTheme}>
            <Dialog_1.default modal={props.isModal === undefined ? true : props.isModal} open={props.isOpen === undefined ? true : props.isOpen} bodyStyle={{ padding: '20px 0px 0px 0px' }} contentStyle={{ maxWidth: UxUtils_1.getDialogWidth() }} autoScrollBodyContent={true}>
                <ModalComps_1.PaddingBox>
                    <ModalComps_1.Header>{props.message}</ModalComps_1.Header>
                    <div style={{ padding: '0px 10px 0px 10px', marginBottom: '30px' }}>
                        <LinearProgress_1.default mode='indeterminate'/>
                    </div>
                </ModalComps_1.PaddingBox>
            </Dialog_1.default>
        </MuiThemeProvider_1.default>);
};
