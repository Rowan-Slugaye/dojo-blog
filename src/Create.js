import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [auther, setAuther] = useState('mario');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, auther };

        fetch(process.env.REACT_APP_API_URL || "http://localhost:8000/blogs", {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }) .then(() => {
            console.log('new blog added')
        })
    }

    return ( 
        <div className="create">
            <h2>Add a Neew Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text"
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                required
                value={ body }
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog auther:</label>
                <select
                value={ auther }
                onChange={(e) => setAuther(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>add blog</button>

            </form>
        </div>
     );
}
 
export default Create;