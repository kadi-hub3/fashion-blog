import React from "react";
import data from "../../data/data";
import { PostStyle } from "./PostUI.styles";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const PostUI: React.FC = () => {
  return (
    <PostStyle>
      <section>
        {data.map((post, id) => {
          return (
            <div className="post-ui" key={id}>
              <div className="img">
                <img src={post.src} alt="post-img" />
              </div>
              <div className="post">
                <h6>{post.category}</h6>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <Link to={`/fashion-blog/post/${post.id}`}>
                  {" "}
                  <Button className="btn-primary" variant="dark">
                    View post
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </PostStyle>
  );
};

export default PostUI;
