import "./Blog.css";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { post_content } from "./post_content";

const Post = ({
  img_link,
  post_heading,
  post_content,
  date,
  comments,
  post_link,
}) => {
  return (
    <div className="article-featured">
      <img src={img_link} alt=" " className="article-image" />
      <h2 className="article-title">{post_heading}</h2>
      <p className="article-info">
        {date} | {comments} comments
      </p>
      <p className="article-body">{post_content}</p>
      <a href={post_link} className="article-read-more">
        CONTINUE READING
      </a>
    </div>
  );
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPosts = () => {
    setPosts(post_content);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(posts.length / 3) &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  return (
    <div id="blog-main-container">
      <div id="blog-image-container">
        <img
          id="blog-image"
          src="https://themanagementtechnician.com/wp-content/uploads/2020/11/blog-banner.jpg"
          alt=""
        />
        <h2 id="blog-heading">Blog</h2>

        <div id="blog-crumbs">
          <NavLink to={"/"}>Home</NavLink>
          <span className="blog-gap">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <span className="blog-current">Blog</span>
        </div>
      </div>
      <div id="blog-post-container">
        {posts.length > 0 && (
          <div id="blog-content-container">
            {posts.slice(page * 3 - 3, page * 3).map((ele, key) => (
              <Post
                img_link={ele.img_link}
                post_heading={ele.post_heading}
                post_content={ele.post_content}
                date={ele.date}
                comments={ele.comments}
                key={key}
              />
            ))}
            {posts.length > 0 && (
              <div id="blog-pagiantion">
                <span
                  className={page > 1 ? "" : "blog-pagination-disabled"}
                  onClick={() => selectPageHandler(page - 1)}
                >
                  ◀️
                </span>
                {[...Array(Math.ceil(posts.length / 3))].map((_, i) => {
                  return (
                    <span
                      className={page === i + 1 && "blog-pagination-selected"}
                      onClick={() => selectPageHandler(i + 1)}
                      key={i}
                    >
                      {i + 1}
                    </span>
                  );
                })}
                <span
                  className={
                    page < Math.ceil(posts.length / 3)
                      ? ""
                      : "blog-pagination-disabled"
                  }
                  onClick={() => selectPageHandler(page + 1)}
                >
                  ▶️
                </span>
              </div>
            )}
          </div>
        )}
        <div id="bolg-sidebar-container">
          <div id="blog-search-local">
            <form id="blog-search-form">
              <input
                id="blog-search-input"
                type="text"
                placeholder="Search..."
              />
              <button id="blog-search-button">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
          <div id="blog-image-box-wrapper">
            <div id="blog-sidebar-pic">
              <img
                src="https://www.tmt.paridhiwebtech.xyz/wp-content/uploads/2020/10/blog-right-image.jpg"
                alt="/"
              />
            </div>
            <div id="blog-sidebar-data">
              <h3 class="blog-sidebar-title">Global Conference</h3>
              <p class="blog-sidebar-excerpt">
                Nulla consequat massa quis Donec pede justo
              </p>
            </div>
          </div>

          <div id="blog-tags-container">
            <h2 id="blog-tag-heading">Tags</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
