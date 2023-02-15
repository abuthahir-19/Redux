import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
    thumbUp : '👍🏻',
    wow: '😮',
    heart : '❤',
    rocket : '🚀',
    coffee: '☕',
}

const ReactionsButton = ({ post }) => {
    const dispatch = useDispatch();
    const reactionsButton = Object.entries(reactionEmoji).map (([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() => {
                    dispatch (reactionAdded({postId : post.id, reaction: name}))
                }}
            >
            {emoji} {post.reactions[name]}
            </button>
        )
    });
    return <div>{reactionsButton}</div>
};

export default ReactionsButton;