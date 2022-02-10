const Comment=(props)=>{
    return(
        <li>
            <h2>{props.email}</h2>
            <h3>{props.body}</h3>
        </li>
    )
};

export default Comment;