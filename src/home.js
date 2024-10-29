import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
 const { data:blogs, isPending, error} = useFetch(process.env.REACT_APP_API_URL || "http://localhost:8000/blogs")  //  this now chooses Localhost:8000 if you dont have REACT_APP_API_URL defined in .env.local file
    

    

    return ( 
        <div className="home">
          {error && <div>{ error }</div>}
          { isPending && <div>Loading...</div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
     );
}
 
export default Home;