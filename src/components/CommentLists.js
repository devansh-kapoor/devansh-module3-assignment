import Comment from "./Comment";
const CommentLists=(props)=>{
    return(
        <ul>
            {props.comment.map((comments)=>(
                <Comment key={Math.random()}
                id={comments.id}
                email={comments.email}
                body={comments.body}

                />
            )
            )}
        </ul>
    );
};

export default CommentLists;