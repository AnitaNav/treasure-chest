export default function Comments({ comments }) {
    return (
        <ul>
            {comments.length ? 
            comments.map((n, idx) => 
            <li key={idx}>{n.text} 
                <span>{new Date(n.updatedAt).toLocaleDateString()}</span>
            </li>)
            : 
            <h3>No comments yet!</h3>
            }
        </ul>
    )
}