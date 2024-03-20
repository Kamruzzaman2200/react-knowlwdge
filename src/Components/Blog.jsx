import { useEffect, useState } from "react";

const Blog = () => {
    const [blogs, setblogs] = useState([])
    useEffect(() => {
        fetch('Public.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    }, [])
    return (
        <div>

        </div>
    );
};

export default Blog;