import { useEffect, useState } from "react";
import Header from './../components/Header';
import Styles from './AboutPage.module.css';
import { TimeLine } from "../components/Timeline";
import Footer from './../components/Footer';
import MissionStatement from "../components/MissionStatement";
import HeroComponent from "../components/HeroComponent";
import { api } from "../api";
const STRAPI_URI = `http://localhost:1337`;

function AboutPage() {
  /*const [leaders, setLeaders] = useState(
    [
    {
      id: 1,
      pic: president,
      name: 'Betty Wakia',
      post: 'PNGWSA President',
      bio: 'Your Bio Here...'
    },
    {
      id: 2,
      pic: vicePresident,
      name: 'Victor Jima',
      post: 'PNGWSA Vice President',
      bio: 'Your Bio Here...'
    },
    {
      id: 3,
      pic: CTGURep,
      name: 'Samuel Valuka',
      post: 'CTGU Students Rep',
      bio: 'Your Bio Here...'
    },
    {
      id: 4,
      pic: secretary,
      name: 'Michelle Kiungu',
      post: 'Secretary',
      bio: 'Your Bio Here...'
    },
    {
      id: 5,
      pic: eventsCoordinator,
      name: 'Natasha Malien',
      post: 'Events and Programs Coordinator',
      bio: 'Your Bio Here...'
    },
    {
      id: 6,
      pic: treasurer,
      name: 'Machintosh Milba',
      post: 'Tresurer',
      bio: 'Your Bio Here...'
    },
    {
      id: 7,
      pic: mediaCoordinator,
      name: 'Samuel Awore Samson',
      post: 'Media Coordinator',
      bio: 'Your Bio Here...'
    }
  ]
  ); */
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
      <MissionStatement />
      <h2 className={Styles.heading}>PNGWSA Executives</h2>
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
      <Footer />
    </>
  )
}
export default AboutPage;