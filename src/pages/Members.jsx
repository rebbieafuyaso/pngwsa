import Styles from './Members.module.css';
import Header from '../components/Header';
import HeroComponent from '../components/HeroComponent';
import Footer from '../components/Footer';
import { api } from '../api';
import { useEffect, useState } from 'react';
import {GraduationCap, School, Cake, Calendar, User2Icon, Book, School2Icon} from 'lucide-react'



function Members() {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const API_URI = import.meta.env.VITE_STRAPI

  useEffect(() => {
    api.get('/members?populate=*')
    .then((response) => {
      setMembers(response.data.data);
      console.log("Data:", response.data.data);
      console.log("Projects here", response.data.data[0]);      
    })
    .catch((error) => {
      console.log('Error: ', error);
    })
  }, []);

  const social = selectedMember?.socialLinks || {};

  return (
        <>
        <Header />
        <main>
          <HeroComponent
            title={`Meet our Talented Members`}
            subtitle={`Members`}
            text={`Members are the heart of PNG WSA and they are the ones that makes this association come alive everyday.`}
            btnText={`Read More`}
            />
          <div className={Styles.membersContainer}>
            {members.map((member) => (
            <div key={member.id}
              onClick={()=> {setSelectedMember(member)}}
              className={Styles.membersCard}>
              <div className={Styles.memberAvatar}>
                <img
                className={Styles.profilePic}
                  src={`${API_URI}${member.avatar?.url}`}
                  alt={member.fullname}
                  />
              </div>
              <div className={Styles.memberDetails}>
                <h3 className={Styles.memberName}>{member.fullname}</h3>
                <ul className={Styles.detailsList}>
                  <li><strong>University:</strong> {member.university}</li>
                  <li><strong>Course:</strong> {member.major}</li>
                  <li><strong>Graduate Year:</strong> {member.expectedGradYear}</li>
                </ul>
              </div>
            </div>
            ))}
            {selectedMember && (
          <div className={Styles.dashboardContainer}>
            <div className={Styles.memberHeading}>
               <button className={Styles.removeBtn} onClick={()=> setSelectedMember(null)}>X</button>
            </div>
            {/* Header with Profile Info */}
            <div className={Styles.dashboardHeader}>
              <div className={Styles.profileLeft}>
              {/* Profile Photo */}
              <img 
                className={Styles.profilePic}
                src={`${API_URI}${selectedMember.avatar.url}`} />
              </div>
              <div className={Styles.dashboardHeaderRight}>
                <span className={Styles.nameContainer}>
                  <i>{selectedMember?.graduateLevel}</i>
                  <h1 className={Styles.fullname}>{selectedMember?.fullname}</h1>
                  
                </span>
                <p><GraduationCap className={Styles.icon} /> {selectedMember?.major}</p>
                {selectedMember?.university && <p><School className={Styles.icon} /> {selectedMember.university}</p>}
                {/* Highlights Here */}
                <span className={Styles.highlights}>
                  <p><Calendar className={Styles.icon} /> Expected Year of Gradution: {selectedMember?.expectedGradYear}</p>
                  <p><User2Icon className={Styles.icon} /> Gender: {selectedMember?.gender}</p>
                  <p><Cake className={Styles.icon} /> Age: {selectedMember?.age}</p>
                </span>
              </div>
            </div>
                      
            <div className={Styles.aboutContainer}>              
            {/* Bio goes here */}
              <h2> <Book />Bio</h2>
              <p className="bio-text">{selectedMember?.bio}</p>
              {/* Acedemic Information */}
              <div className={Styles.academicContainer}>
                <h3><School2Icon />Academic Information</h3>
                <div className={Styles.academicTable}>
                  <table>
                    <tbody>
                      <tr>
                        <th>University:</th>
                        <td>{selectedMember?.university}</td>
                      </tr>
                      <tr>
                        <th>Major:</th>
                        <td>{selectedMember?.major}</td>
                      </tr>
                      <tr>
                        <th>Degree Level:</th>
                        <td>{selectedMember?.graduateLevel}</td>
                      </tr>
                      <tr>
                        <th>Expected Graduation Year:</th>
                        <td>{selectedMember?.expectedGradYear}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
                
            {/* Skills Section */}
            <div className={Styles.skillsContainer}>
            <h2>Skills</h2>
              <div className={Styles.skillsBox}>
              {selectedMember.skills?.map((skill, index) => (
                <div key={index} className={Styles.skillsTag}>
                  {skill}
                </div>
              ))}
              </div>
            </div>
              
            {/* Projects Section */}
            <div className={Styles.projectContainer}>
              <div className="section-header">
                <h2 className={Styles.center}>Projects Involved</h2>
              </div>
              <div className={Styles.projectBox}>
              {selectedMember?.projects?.map((project) => (
                <div key={project.id} className={Styles.projectCard}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={Styles.projectLink}>View Project →</a>
                  )}
                </div>
              ))}
              </div>
            </div>
              
            {/* Social Links Section */}
            <div className={Styles.socialLinksContainer}>
              <div className="section-header">
                <h2>Social Links</h2>
              </div>
              <div className={Styles.socialLinks}>
                {social.facebook && <a href={social.facebook} target="_blank"> Facebook</a>}
                {social.instagram && <a href={social.instagram} target="_blank">Instagram</a>}
                {social.twitter && <a href={social.twitter} target="_blank">Twitter</a>}
                {social.linkedin && <a href={social.linkedin} target="_blank">LinkedIn</a>}
                {social.github && <a href={social.github} target="_blank">GitHub</a>}
                {social.website && <a href={social.website} target="_blank">Website</a>}
                {!social.facebook && !social.instagram && !social.twitter && 
                !social.linkedin && !social.github && !social.website && (
                  <p>No social links added yet.</p>
                )}
              </div>
            </div>
          </div>
        )}
        </div>
        </main>
        <Footer />
      </>
  )
}
export default Members;