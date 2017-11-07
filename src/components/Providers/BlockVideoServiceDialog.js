import Dialog from "material-ui/Dialog";
import * as React from "react";
import { Loc, WordingInfo } from "../../Localized/WordingInfo";
import { ContentDialog, DialogHeader, PrimaryDialogButton, } from "../../StyleComponents/DialogContentStyles";
import { getDialogWidth, getFontSize } from "../../UxUtils";
export class BlockVideoServiceDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        };
    }
    render() {
        const { isLocal, onClose } = this.props;
        return (<Dialog contentStyle={{ maxWidth: getDialogWidth() }} titleStyle={{ fontWeight: "bold", textAlign: "center" }} bodyStyle={{ textAlign: "center" }} actionsContainerStyle={{ padding: 0 }} actions={[
            <PrimaryDialogButton provider={true} style={{ width: "100%", textAlign: "center" }} onClick={() => {
                this.setState({ open: false });
                onClose();
            }}>
                        {WordingInfo.Close[isLocal]}
                    </PrimaryDialogButton>,
        ]} modal={true} open={this.state.open} onRequestClose={() => { this.setState({ open: false }); }}>
                <div>
                    <DialogHeader>
                        {WordingInfo.Success[isLocal]}
                    </DialogHeader>
                    <ContentDialog fontsize={getFontSize()}>
                        {Loc.FeedbackSuccess[isLocal]}
                    </ContentDialog>
                </div>
            </Dialog>);
    }
}
