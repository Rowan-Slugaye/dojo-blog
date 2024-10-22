import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setblogs] = useState(null)

    useEffect(() => {
      console.log('use effect ran')
      fetch('http://192.168.86.166:8000/blogs')
       .then(res => {
        return res.json()})
        .then((data) => {
          console.log(data)
          setblogs(data)
        })
    }, []);

    return ( 
        <div className="home">
          {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
     );
}
 
export default Home;