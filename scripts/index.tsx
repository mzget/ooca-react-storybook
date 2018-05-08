
import {
    withMuiTheme,
} from "./components/MaterialUtils";

import { NetworkInfoDialog } from "./components/NetworkInfoDialog";
import { NetworkInfoToolbar } from "./components/NetworkInfoToolbar";

const NetworkInfoDialogWithTheme = withMuiTheme(NetworkInfoDialog);
const NetworkInfoToolbarWithTheme = withMuiTheme(NetworkInfoToolbar);

export default {
    NetworkInfoDialogWithTheme,
    NetworkInfoToolbarWithTheme
};