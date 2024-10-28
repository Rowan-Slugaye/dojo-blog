import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');

    return ( 
        <div className="create">
            <h2>Add a Neew Blog</h2>
            <form >
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
                ></textarea>
                <label>Blog auther:</label>
                <select>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>add blog</button>
                <p>{ title }</p>
            </form>
        </div>
     );
}
 
export default Create;