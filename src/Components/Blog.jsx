import { useEffect, useState } from "react";

const Blog = () => {
    const [blogs, setblogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    }, [])
    return (
        <div className="md:w-2/3">
<h1 className="text-4xl">Blog:{blogs.length}</h1>
        </div>
    );
};

export default Blog;