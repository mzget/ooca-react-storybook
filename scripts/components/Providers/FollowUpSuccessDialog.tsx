import Dialog from "material-ui/Dialog";
import { black, green500, grey500, white } from "material-ui/styles/colors";
import SvgIcon from "material-ui/SvgIcon";
import * as React from "react";

import { Loc, ProviderLocalized, WordingInfo } from "../../Localized/WordingInfo";
import {
    ContentDialog, DialogHeader, LableDialog,
    PrimaryDialogButton,
} from "../../StyleComponents/DialogContentStyles";
import { getDialogWidth, getFontSize } from "../../UxUtils";

import IconUp from "../../../Images/up_icon.png";

export class FollowUpSuccessDialog extends React.Component<{ isLocal: string, isProvider: boolean, onClose: () => void }, { open: boolean }> {
    constructor(props: any) {
        super(props);

        this.state = {
            open: true,
        };
    }

    public render() {
        const { isLocal, isProvider, onClose } = this.props;
        const imgStyle = { width: "128", height: "128" };

        return (
            <Dialog
                contentStyle={{ maxWidth: getDialogWidth() }}
                titleStyle={{ fontWeight: "bold", textAlign: "center" }}
                bodyStyle={{ textAlign: "center" }}
                actionsContainerStyle={{ padding: 0 }}
                actions={[
                    <PrimaryDialogButton
                        provider={isProvider}
                        style={{ width: "100%", textAlign: "center" }}
                        onClick={() => {
                            this.setState({ open: false });
                            onClose();
                        }}
                    >
                        {WordingInfo.Close[isLocal]}
                    </PrimaryDialogButton>,
                ]}
                modal={true}
                open={this.state.open}
                onRequestClose={() => { this.setState({ open: false }); }}
            >
                <div>
                    <SvgIcon style={{ color: grey500, width: 96, height: 96 }}>
                        <svg>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </SvgIcon>
                    <DialogHeader>
                        {WordingInfo.Success[isLocal]}
                    </DialogHeader>
                    <ContentDialog fontsize={getFontSize()}>
                        {
                            Loc.FeedbackSuccess[isLocal]
                        }
                    </ContentDialog>
                </div>
            </Dialog>
        );
    }
}
