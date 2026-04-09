import { useState } from "react";
import AboutHero from "../components/AboutHero";
import president from '/profile/president.png';
import vicePresident from '/public/profile/vice-president.png';
import CTGURep from '/public/profile/CTGU_rep.png';
import secretary from '/public/profile/secretary.png';
import eventsCoordinator from '/public/profile/events-coordinator.png';
import mediaCoordinator from '/public/profile/media-coordinator.png';
import treasurer from '/public/profile/treasurer.png';
import Header from './../components/Header';
import Styles from './AboutPage.module.css';
import { TimeLine } from "../components/Timeline";
import Footer from './../components/Footer';
import MissionStatement from "../components/MissionStatement";

function AboutPage() {
  const [leaders, setLeaders] = useState(
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
  )
  return(
    <>
    <Header />
      <AboutHero />
      <MissionStatement />
      <h2 className={Styles.heading}>PNGWSA Executives</h2>
      <div className={Styles.profileContainer}>

        {leaders.map((leader) => {
          return(
            <div className={Styles.profileCards} key={leader.id}>
              <img src={leader.pic} alt="" />
              <h3>{leader.name}</h3>
              <p className={Styles.post}>{leader.post}</p>
              <p className={Styles.bio}>{leader.bio}</p>
            </div>
          )
        })}
      </div>
      <TimeLine />
      <Footer />
    </>
  )
}
export default AboutPage;