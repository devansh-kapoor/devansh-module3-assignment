import { useEffect, useState } from "react";
import CommentLists from "./CommentLists";
import PostsList from "./PostsList";
import classes from './Post.module.css';


const Post=(props)=>{
    const[comments,setComments]=useState([]);
    const[hide,setHide]=useState(false);

    const fetchComment=(async()=>{
        const response= await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.id}`);
        const data= await response.json();
        setComments(data);
        
        setHide(!hide);
    });
        
    let content=<p>Empty</p>;

    if(comments.length>0)
    {
        content=<CommentLists comment={comments}/>

        
    }
    
    return(
        <li className={classes.post}>
            <h2>{props.title}</h2>
            <h3>{props.body}</h3>
            <button onClick={()=>fetchComment()}>{!hide?"show Comments":"Hide Comments"}</button>
        {hide ?<section>{content}</section>:null}

        </li>
    )
};

export default Post;