const BlogsList = ({blogs, title, deleteBlog}) => {

    return ( 
        <div className="blogs-list">
            <h2>{ title }</h2>
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2> {blog.title} </h2>
                        <p>Written By {blog.author}</p>
                        <button onClick = {() => deleteBlog(blog.id) }>Delete</button>
                    </div>
                ))
            }
        </div>


    );
}
 
export default BlogsList;