
// import Post from './Post';

// interface Props {
//   posts: Array<any>;
// }

// const Posts: React.FC<Props> = ({ posts }) => {
//   return (
//     <div className='Posts mt-20'>
//       {posts.map((p) => (
//         <Post key={p.id} post={p} />
//       ))}
//     </div>
//   );
// };

// export default Posts;

import React from 'react';
import Post from './Post';
import Skeleton from 'react-loading-skeleton';

interface Props {
  posts: Array<any>;
  loading: boolean;
}

const Posts: React.FC<Props> = ({ posts, loading }) => {
  return (
    <div className='Posts mt-20 mb-5'>
      {loading ? (
        // Render skeleton loader when loading is true
        Array(4).fill(null).map((_, index) => (
          <div key={index} className="SkeletonPost mx-5" style={{ zIndex: 0 }}>
          <Skeleton height={250} />
          <Skeleton height={30} width={385} style={{ marginTop: '10px' }} />
          <div className='flex gap-20'>
            <Skeleton className='' height={20} width={100} style={{ marginTop: '10px' }} />
            <Skeleton height={20} width={200} style={{ marginTop: '10px' }} />
          </div>
          <Skeleton height={120} style={{ marginTop: '10px' }} />
        </div>
        
        ))
      ) : (
        // Render posts when loading is false
        posts.map((p) => (
          <Post key={p.id} post={p} />
        ))
      )}
    </div>
  );
};

export default Posts;
