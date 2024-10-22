import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setblogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      setTimeout(() => {
      fetch('http://192.168.86.166:8000/blogs') // I didnt use http://localhost:8000/blogs becuse i wanted it to work on other Computers 
        .then(res => {
          if(!res.ok){
            throw Error('Could not fetch the data from that resource');

          }
          return res.json();
        })
        .then((data) => {
          setblogs(data);
          setIsPending(false);
          setError(false);
        })
        .catch(err => {
          setError(err.message);
          setIsPending(false);
        })
      }, 1000);
    }, []);

    return ( 
        <div className="home">
          {error && <div>{ error }</div>}
          { isPending && <div>Loading...</div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
     );
}
 
export default Home;