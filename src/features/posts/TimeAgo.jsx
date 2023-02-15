import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timeStamp }) => {
    let timeago = '';
    if (timeStamp) {
        const date = parseISO (timeStamp);
        const timePeriod = formatDistanceToNow (date);
        timeago = `${timePeriod} ago`;
    }

    return (
        <span title={timeStamp}>
            &nbsp; <i>{ timeago }</i>
        </span>
    );
}

export default TimeAgo;