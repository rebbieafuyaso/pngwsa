import { useEffect, useState } from "react";
import Header from './../components/Header';
import Styles from './AboutPage.module.css';
import { TimeLine } from "../components/Timeline";
import Footer from './../components/Footer';
import MissionStatement from "../components/MissionStatement";
import HeroComponent from "../components/HeroComponent";
import { api } from "../api";
import { Network } from "lucide-react";
const STRAPI_URI = `http://localhost:1337`;

function AboutPage() {
 const [executives, setExecutives] = useState([]);

  useEffect(() => {
  const getExecutives = async () => {
    try {
      const res = await api.get(`members`,
        {
          params: {
            'filters[isExecutive][$eq]': true,
            populate: "*"
          }
        },
      );
      setExecutives(res.data.data);
      console.log("Data Here: ", res.data.data);
    } catch (error) {
      console.error("Error", error);
      return [];
    }
  };
  getExecutives();
}, []);
  return(
    <>
    <Header />
      <HeroComponent
      title={`Meet Our Teams, Know Our Values`}
      subtitle={`About Us`}
      text={`Meet the dedicated leaders of PNGWSA, discover how and when it was founded, and know about our values.`}
        btnText={`Read More`}
      />
      <div className={Styles.sectionContainer}>
        <div>
          <h6>About</h6>
          <h2>Who we are...</h2>
          <p>The PNG Wuhan Students Association is a student-led organization made up of Papua New Guinean students studying in Wuhan, China. Established to support and unite PNG students, the association is run entirely by students and is dedicated to promoting the welfare, academic success, and personal development of its members.
          <br /><br />
          Our mission is to create a supportive and inclusive environment that helps students adapt to life and study in China. We provide guidance, mentorship, and assistance to students throughout their academic journey, ensuring they have access to the resources and support needed to succeed.
          <br /><br />
          The association actively advocates for the welfare of PNG students, organizes educational and cultural activities, and fosters a strong sense of community among members. We also work closely with relevant government agencies, educational institutions, and partners to create opportunities for Papua New Guinean students.
          <br /><br />
          One of our key areas of collaboration is supporting government initiatives that provide access to top universities in China through STEM (Science, Technology, Engineering, and Mathematics) scholarship programs. Through these partnerships, we help facilitate opportunities for talented students to pursue high-quality education and contribute to the future development of Papua New Guinea.
          <br /><br />
          The PNG Wuhan Students Association remains committed to empowering students, strengthening academic excellence, promoting cultural exchange, and building future leaders who will make meaningful contributions to their communities and nation.</p>
        </div>
        <div></div>
      </div>
      <MissionStatement />
      <h3 className={Styles.heading}>PNGWSA Executives</h3>
      <div className={Styles.profileContainer}>

        {executives.map((leader) => (
            <div className={Styles.profileCards} key={leader.id}>
              <img src={`${STRAPI_URI}${leader.avatar?.url}`} alt="profile-pic"/>
              <h3>{leader.fullname}</h3>
              <p className={Styles.post}>{leader.position}</p>
              <p className={Styles.bio}>{leader.bio}</p>
            </div>
          )
        )}
      </div>
      <TimeLine />
      <div className={Styles.sectionContainer}>
        <div>
          <h2><Network size={40}/> Meet Our Alumni</h2>
          <p>Our alumni are proud graduates who have completed their studies in China and are now contributing to their professions and communities. Through their achievements, experiences, and mentorship, they continue to inspire and support current PNG students on their academic and career journeys.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default AboutPage;