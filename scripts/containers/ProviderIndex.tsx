/*eslint-disable*/
import * as React from "react";

import { withMuiTheme } from "../components/MaterialUtils";
import { BlockVideoServiceDialog } from "../components/Providers/BlockVideoServiceDialog";

const BlockVideoServiceDialogWithTheme = withMuiTheme(BlockVideoServiceDialog);

class ProviderIndex extends React.Component<{ Local, Show, onClose }, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const { Local } = this.props;
        const lang = Local.toUpperCase();

        return (
            <BlockVideoServiceDialogWithTheme isLocal={lang} isShow={this.props.Show} onClose={this.props.onClose} />
        );
    }
}

export default ProviderIndex;
