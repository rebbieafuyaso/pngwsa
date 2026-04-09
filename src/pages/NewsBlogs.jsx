import React from "react";
import "./NewsBlogs.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NewsBlogs = () => {
  const featuredPosts = [
    { id: 1, platform: "Facebook", text: "PNGWSA latest update...", img: 'https://external-ams2-1.xx.fbcdn.net/emg1/v/t13/6973382573777174918?url=https%3A%2F%2Flive-production.wcms.abc-cdn.net.au%2F6d4099c7af536f69d0f964bacf1e994d%3Fimpolicy%3Dwcms_crop_resize%26cropH%3D394%26cropW%3D700%26xPos%3D0%26yPos%3D34%26width%3D862%26height%3D485%26imformat%3Dgeneric&fb_obo=1&utld=abc-cdn.net.au&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75_tt6&_nc_gid=1CM_WfrUy35zqpJ96wMUWw&_nc_oc=AdqwTpK2xr9XG_OtxF5OrOMHW3ml5IXifGCQ1chs2ClIuSgsZQhVotgOE3hJjynHRaQ&ccb=13-1&oh=06_Q3-9AbtsUkxAVuJ4fKKXYRHjBGk-KPIUa3xBo0nw1QmGjxb7&oe=69D80638&_nc_sid=e17101' },
    { id: 2, platform: "LinkedIn", text: "Exciting partnership news...", img: 'https://external-ams2-1.xx.fbcdn.net/emg1/v/t13/8071793500905359255?url=https%3A%2F%2Flive-production.wcms.abc-cdn.net.au%2Fc2f27fd5805bc841b601ed1078d0523b%3Fimpolicy%3Dwcms_crop_resize%26cropH%3D377%26cropW%3D670%26xPos%3D15%26yPos%3D0%26width%3D862%26height%3D485%26imformat%3Dgeneric&fb_obo=1&utld=abc-cdn.net.au&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75_tt6&_nc_gid=Z78TO6kgUB4qYqDCLoXJDA&_nc_oc=AdrcVWikq1tbVASd98RJvlYqnb4IlE3JUrDg_ETV9uylhUy8fnssy8gPyxzXHr8NYPk&ccb=13-1&oh=06_Q3-9AUMvlR2sZlPh4dh9Oat72-jJMQvVVLauDT1JOm3uUHeW&oe=69D7FE34&_nc_sid=c97757' },
    { id: 3, platform: "Facebook", text: "Community outreach success...", img: 'https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/638041998_122217861500297650_9151954971161579034_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=FUSXYunHIUsQ7kNvwGFBQwz&_nc_oc=Adrf7eYnK4s_q2eu1ZgT815MAEtbikg-2DKvrTefYis75r3vmsHBp8NY8LzNZniB6Sc&_nc_zt=23&_nc_ht=scontent-ams2-1.xx&_nc_gid=Z78TO6kgUB4qYqDCLoXJDA&_nc_ss=7a389&oh=00_Af2wJBeov_gMRKNA5mqs17QglECggcfI9rOm7ltxIHevoQ&oe=69DBE83A' },
  ];

  const moreNews = [
    { id: 1, title: "Youth Program Expansion", link: "#", img: 'https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/634392555_122111038479220610_8136832111000098273_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Dv8jF4vS4gUQ7kNvwGeVaWW&_nc_oc=Adr-HbB-A9fY4VSPihGOzpgvIuKVRhfpfD4AXOFjS6jPCjyuQy5Gal04lbi0zFOEpAc&_nc_zt=23&_nc_ht=scontent-ams2-1.xx&_nc_gid=IoxfW07371SGRFOTOYSQuA&_nc_ss=7a389&oh=00_Af1fXViSIOQMVT7Qa5xqe12tGvnRTMehHklySIHNHZfAdQ&oe=69DC2F93' },
    { id: 2, title: "Annual Event Highlights", link: "#", img: 'https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/632452449_122110998429220610_6935625474952656546_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=qkUpCEtiL2UQ7kNvwE0RIJS&_nc_oc=Adp0OUxem0CJKGKo4D0E6NZtTc7Y-E-f0wiWiB0b3zb_Va6WjUb_zhKbV_1pzZHJCoM&_nc_zt=23&_nc_ht=scontent-ams2-1.xx&_nc_gid=U8nx-EvOdl63Gy2szNi4zQ&_nc_ss=7a389&oh=00_Af1CykY-pbhrwaxYMRS3t2qDJ62PU686rh0mnS4N03Vzaw&oe=69DC48EA' },
    { id: 3, title: "New Sponsorship Deals", link: "#", img: 'https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/622897960_122107958577220610_7163943106739813858_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=w3PY4YQ1KToQ7kNvwHLofZl&_nc_oc=AdrlozFFnn8Os_75Mp2Th0NuQMUQngs60UgFpJFdI-YCp0d9tAx6SOWmYVBD_PLsXSI&_nc_zt=23&_nc_ht=scontent-ams2-1.xx&_nc_gid=8kmlONcjwNuVqkN30pJysw&_nc_ss=7a389&oh=00_Af1qqlJMOavKGk74-4Ap9zocF5KQchh1JZP3EuGsmS6rPg&oe=69DC3292' }
  ];

  return (
    <>
      <div className='news-blog'>
        <Header />
      <h1 className="title">Featured News Feeds</h1>
      <div className="news-wrapper">
        <div className="news-container">
          
          {/* SIDEBAR */}
          <aside className="sidebar">
            <h2 className="section-title">Social Feed</h2>

            {featuredPosts.map((post, index) => (
              <div
                key={post.id}
                className={`social-card ${index === 0 ? "highlight" : ""}`}
              >
                <img src={post.img} alt="" />
                <span className="platform">{post.platform}</span>
                <p>{post.text}</p>
              </div>
            ))}
          
          </aside>

          {/* MAIN CONTENT */}
          <main className="main-content">
            
            {/* HERO */}
            <section className="hero">
              <img
                src="https://www.postcourier.com.pg/wp-content/uploads/2026/02/Picture-for-Caption-4.jpg"
                alt="PNGWSA Hero"
                className="hero-img"
              />

              <div className="hero-overlay">
                <h2>PNG WSA Welcomes the first batch of PNG STEM Students</h2>
                <p>
                  Following our partnership with the PNG govenment regarding the STEM initiative, the first batch of STEM students where welcomed into the most prestigious institute of Wuhan University of Technology...
                </p>
              </div>
            </section>

            {/* MORE NEWS */}
            <section className="more-news">
              <h2 className="section-title">Latest News</h2>
              <div className='flex-box'>
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7396824259207122944?collapsed=1" height="670" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7370929078767493120?collapsed=1" height="670" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
              </div>

              <div className="news-grid">
                {moreNews.map((news) => (
                  <a key={news.id} href={news.link} className="news-card">
                    <div className="news-content">
                      <div>
                        <img src={news.img} alt="" />
                      </div>
                      <div>
                        <h3>{news.title}</h3>
                      <span className="read-more">Read more →</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>

      <Footer />
      </div>
    </>
  );
};

export default NewsBlogs;