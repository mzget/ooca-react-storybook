import Dialog from "material-ui/Dialog";
import * as React from "react";
import { ProviderLocalized, WordingInfo } from "../../Localized/WordingInfo";
import { ContentDialog, PrimaryDialogButton, } from "../../StyleComponents/DialogContentStyles";
import { getDialogWidth } from "../../UxUtils";
export class BlockVideoServiceDialog extends React.Component {
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
        return (<Dialog contentStyle={{ maxWidth: getDialogWidth() }} titleStyle={{ fontWeight: "bold", textAlign: "center" }} bodyStyle={{ textAlign: "center" }} actionsContainerStyle={{ padding: 0 }} actions={[
            <PrimaryDialogButton provider={true} style={{ width: "100%", textAlign: "center" }} onClick={onClose}>
                        {WordingInfo.Close[isLocal]}
                    </PrimaryDialogButton>,
        ]} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }}>
                <div>
                    <ContentDialog fontsize={17}>
                        {ProviderLocalized.BlockVideoService[isLocal]}
                    </ContentDialog>
                </div>
            </Dialog>);
    }
}
