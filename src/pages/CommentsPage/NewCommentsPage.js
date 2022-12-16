export default function Comments({ comments }) {
    const date = new Date(comments.createdAt)
    return (
        <ul>
            {comments.length ? 
            comments.map((n, idx) => <li key={idx}>{n.text} {date.toLocaleString('UTC-09:00')}</li>): 
            <h1>No comments yet!</h1>
            }
        </ul>
    )
}