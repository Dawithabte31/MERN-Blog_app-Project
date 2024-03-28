// import { useEffect, useState } from "react";
// import Posts from "../components/Posts";
// // import Searchbar from '../components/Searchbar';
// import Sidebar from "../components/Sidebar";
// import axios from "axios";
// import { useLocation } from "react-router-dom";
// import Category from "../components/Category";
// function Home() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const { search } = useLocation();
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await axios.get(
//           `${import.meta.env.VITE_BASE_URL}api/posts/allposts${search}`
//         );
//         // console.log(res.data);
//         // const responseData = await res.data;
//         // // Assuming responseData is an array or can be parsed into an array
//         // const dataArray = Array.isArray(responseData)
//         //   ? responseData
//         //   : JSON.parse(responseData);
//         setPosts(res.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchPosts();
//   }, [search]);

//   return (
//     <div className="">
//       {/* <Searchbar/> */}
//       <Category />
//       <div className="Home">
//         <Posts posts={posts} />
//         <Sidebar />
//       </div>
//     </div>
//   );
// }

// export default Home;

import { useEffect, useState } from 'react';
import Posts from '../components/Posts';
// import Searchbar from '../components/Searchbar';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Category from '../components/Category';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}api/posts/allposts${search}`);
        setPosts(res.data);
        setLoading(false); // Set loading to false after posts are fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, [search]);

  return (
    <div className="">
      {/* <Searchbar/> */}
      <Category />
      <div className="Home">
        <Posts posts={posts} loading={loading} /> {/* Pass loading state to Posts component */}
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;

