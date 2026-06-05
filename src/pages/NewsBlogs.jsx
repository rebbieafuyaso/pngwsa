import Header from "../components/Header";
import HeroComponent from "../components/HeroComponent";
import Footer from "../components/Footer"
import Styles from './NewsBlogs.module.css';
import { ArrowRight } from 'lucide-react';
import {api} from '../api';
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

function NewsBlogs() {
  const [blogData, setBlogData] = useState([]);
  const API_URI = import.meta.env.VITE_STRAPI;

useEffect(() => {
    const fetchBlogs = async () => {
    try {
      const res = await api.get(`/blogs?populate=*`);
      setBlogData(res.data.data);
    } catch (error) {
      console.error('Error: ', error);
    }
  }

  fetchBlogs();
}, [])



  return(
    <>
      <Header />
    <HeroComponent
    subtitle={'News and Blogs'}
    text={'See our latest news and blogs, browse and read through achievements and milestones set up by PNG WSA'}
    title={'News and Blogs'}
    />
    <div className={Styles.newsContainer}>
  {blogData.map((data) => (
    <div key={data.id} className={Styles.newsCard}>
      <h6>{data.category}</h6>

      <div className={Styles.dateContainer}>
        <i>Published By: {data.author}</i>
        <i>Published At: {data.published}</i>
      </div>

      <h2>{data.title}</h2>

      <img
        src={`${API_URI}${data.blogPic?.url}`}
        alt={data.slug}
/>

      <p>{data.excerpt}</p>

      <Link to={`/blog/${data.slug}`}>
        Read More <ArrowRight />
      </Link>
    </div>
  ))}
</div>
    <Footer />
    </>
  ) 
}

export default NewsBlogs;