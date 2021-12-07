import { useState } from "react";
import BlogsList from "./BlogsList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My New Website', body: 'lorem ipsum ...', author: 'mario', id: 1 },
        { title: 'Welcome Party', body: 'lorem ipsum ...', author: 'yoshi', id: 2 },
        { title: 'Web Dev Top Tip', body: 'lorem ipsum ...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( (blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogsList blogs = {blogs} title = "All Blogs!" deleteBlog = {handleDelete} />
            {/* <BlogsList blogs = {blogs.filter((blog) => blog.author === 'mario')} title = "Mario's Blogs!" /> */}
        </div>
    );
}

export default Home;
