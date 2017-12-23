"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dialog_1 = require("material-ui/Dialog");
const React = require("react");
const WordingInfo_1 = require("../../Localized/WordingInfo");
const DialogContentStyles_1 = require("../../StyleComponents/DialogContentStyles");
const UxUtils_1 = require("../../UxUtils");
class BlockVideoServiceDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.isShow,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isShow !== this.props.isShow) {
            this.setState({ open: nextProps.isShow });
        }
    }
    render() {
        const { isLocal, onClose } = this.props;
        return (<Dialog_1.default contentStyle={{ maxWidth: UxUtils_1.getDialogWidth() }} titleStyle={{ fontWeight: "bold", textAlign: "center" }} bodyStyle={{ textAlign: "center" }} actionsContainerStyle={{ padding: 0 }} actions={[
            <DialogContentStyles_1.PrimaryDialogButton provider={true} style={{ width: "100%", textAlign: "center" }} onClick={onClose}>
                        {WordingInfo_1.WordingInfo.Close[isLocal]}
                    </DialogContentStyles_1.PrimaryDialogButton>,
        ]} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }}>
                <div>
                    <DialogContentStyles_1.ContentDialog fontsize={17}>
                        {WordingInfo_1.ProviderLocalized.BlockVideoService[isLocal]}
                    </DialogContentStyles_1.ContentDialog>
                </div>
            </Dialog_1.default>);
    }
}
exports.BlockVideoServiceDialog = BlockVideoServiceDialog;
