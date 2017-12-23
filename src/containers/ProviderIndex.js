"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*eslint-disable*/
const React = require("react");
const MaterialUtils_1 = require("../components/MaterialUtils");
const BlockVideoServiceDialog_1 = require("../components/Providers/BlockVideoServiceDialog");
const BlockVideoServiceDialogWithTheme = MaterialUtils_1.withMuiTheme(BlockVideoServiceDialog_1.BlockVideoServiceDialog);
class ProviderIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { Local } = this.props;
        const lang = Local.toUpperCase();
        return (<BlockVideoServiceDialogWithTheme isLocal={lang} isShow={this.props.Show} onClose={this.props.onClose}/>);
    }
}
exports.default = ProviderIndex;
