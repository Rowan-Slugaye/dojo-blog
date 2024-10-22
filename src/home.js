import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setblogs] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
      setTimeout(() => {
      console.log('use effect ran')
      fetch('http://192.168.86.166:8000/blogs') // I didnt use http://localhost:8000/blogs becuse i wanted it to work on other Computers 
       .then(res => {
        return res.json()})
        .then((data) => {
          console.log(data)
          setblogs(data)
          setIsPending(false)
        })
      }, 1000)
    }, []);

    return ( 
        <div className="home">
          { isPending && <div>Loading...</div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
     );
}
 
export default Home;