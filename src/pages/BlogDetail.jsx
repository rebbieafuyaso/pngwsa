import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Styles from "./BlogDetails.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/fontawesome-free-solid";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BlogDetail = () => {
  const { slug } = useParams();

  const API_URI = import.meta.env.VITE_STRAPI_URI;
  const IMG_URL = import.meta.env.VITE_STRAPI;

  const { data, loading, error } = useFetch(
    `${API_URI}/blogs?filters[slug][$eq]=${slug}&populate=*`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading article.</p>;

  const blog = data.data[0];

  return (
    <>
      <Header />

      <div className={Styles.blogContainer}>
        <Link className={Styles.backBtn} to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </Link>

        <h2 className={Styles.blogTitle}>
          {blog.title}
        </h2>
        <img
        src={`${IMG_URL}${blog.blogPic.url}`}
        alt={blog.slug} className={Styles.blogImg}/>
        {blog.content?.map((block, index) => (
          <p
            className={Styles.blogContent}
            key={index}
          >
            {block.children?.[0]?.text}
          </p>
        ))}
        <p className={Styles.blogDate}>
          <FontAwesomeIcon icon={faCalendar} />
          {new Date(blog.published).toLocaleDateString()}
        </p>
        <p>{blog.author}</p>
      </div>

      <Footer />
    </>
  );
};

export default BlogDetail;