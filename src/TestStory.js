/*eslint-disable*/
import * as React from 'react';
import { PleaseNoteDialog } from "./components/PleaseNoteDialog";
export class TestStory extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        // <ThumbUpDialog _isLocal={'EN'} _isProvider={false} handMSGState={() => { }} />
        <PleaseNoteDialog _isLocal={'EN'} isProvider={false}/>);
    }
}
