
import  { NavLink } from 'react-router-dom'
interface Category {
  name: string;
}

interface Props {
  post: {
    photo: string;
    categories: Category[];
    title: string;
    _id:any;
    createdAt: string;
    desc: string;
    username:string;
  };
}

const Post: React.FC<Props> = ({ post }) => {
  
  const PF="http://localhost:5000/images/";

  return (
    <div className='Post mx-5 '>
{post.photo && <img src={PF + post.photo} alt='' />}      
<div className='Post-Info'>
        <div className='PostCats'>
          {post.categories.map((cat,index) => (
            <span key={index} >{cat.name}</span>
          ))}
        </div>
        <NavLink style={{textDecoration:"none",color:"black"}} to={`/post/${post._id}`}>
          <span className='postTitle'>{post.title}</span>
        </NavLink>
        <div className=''>      
        <NavLink style={{textDecoration:"none",color:"black"}} to={`/post/${post._id}`}>
        <span  className='spanuser text-start mx-4 font-medium'>{post.username}</span>  
        </NavLink>
          <span className='postDate text-end mx-10'>{new Date(post.createdAt).toDateString()}</span>
        </div>
      <p className='postDesc text-start '>{post.desc}</p>
      </div>
    </div>
  );
};

export default Post;