import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
 const { data:blogs, isPending, error} = useFetch(process.env.REACT_APP_API_URL || "http://localhost:8000/blogs")  // I didnt use http://localhost:8000/blogs becuse i wanted it to display on a diffrent pc so i could both see the video, program and see the site update in real time 
    

    

    return ( 
        <div className="home">
          {error && <div>{ error }</div>}
          { isPending && <div>Loading...</div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
     );
}
 
export default Home;