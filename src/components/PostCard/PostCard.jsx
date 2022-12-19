
export default function postCard({post }) {
    return (
        <>
            <img src={post.image} alt={post.title} />
            <div>{post.title}</div>
            <p>{post.text}</p>
        </>
    );

}