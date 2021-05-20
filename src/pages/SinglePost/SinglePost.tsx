import React from "react";
import Banner from "../../components/Banner/Banner";
import Title from "../../components/Title/Title";
import { Global } from "./SinglePost.styles";

const SinglePost: React.FC<{ post: any }> = ({ post }) => {
  return (
    <>
      <Global />
      <main>
        <h6>{post.category}</h6>
        <Title title={post.title} />
        <Banner img={post.src} />
        <div>
          <p>{post.fullDesc}</p>
        </div>
      </main>
    </>
  );
};

export default SinglePost;
