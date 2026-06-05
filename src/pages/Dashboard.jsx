import { useState, useEffect } from "react";
import { api } from "../api";
import FormHeader from "./../components/FormHeader";
import Styles from "./Dashboard.module.css";
const STRAPI_URL = 'http://localhost:1337';
import { Book, Cake, Calendar, GraduationCap, School, School2Icon, User2Icon } from 'lucide-react';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // Track which section is being edited
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Form states for editing
  const [bio, setBio] = useState("");
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    github: "",
    website: "",
  });
  //Editable fields here....
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  //const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  
  // Temporary states for adding new items
  const [newProject, setNewProject] = useState({ title: "", description: "", link: "" });
  const [newSkill, setNewSkill] = useState("");

  // Fetch user data on load
  useEffect(() => {
    fetchUserData();
  }, []);
  useEffect(() => {
    console.log("Member:", member);
    console.log("Avatar:", member?.avatar);
  }, [member])

  const fetchUserData = async () => {
    
    try {
      const jwt = localStorage.getItem('jwt');
      if (!jwt) {
        window.location.href = '/login';
        return;
      }

      const response = await api.get('/auth/me', {
        headers: { Authorization: `Bearer ${jwt}` }
      });
      console.log("Full response:", response.data);
      console.log("Member", response.data.member);
      console.log("Avatar:", response.data.member?.avatar)
      console.log("Avatar URL here:", response.data.member?.avatar?.url);

      setUser(response.data.user);
      setMember(response.data.member);

      //Other data here
      if (response.data.member?.avatar?.url) {
        setImagePreview(response.data.member.avatar.url);
      }
      
      // Initialize form states with existing data
      setBio(response.data.member?.bio || "");
      
      setSocialLinks(response.data.member?.socialLinks || {
        facebook: "", instagram: "", twitter: "", linkedin: "", github: "", website: ""
      });
      setProjects(response.data.member?.projects || []);
      setSkills(response.data.member?.skills || []);
      
    } catch (error) {
      console.error("Error fetching user:", error);
      if (error.response?.status === 401) {
        window.location.href = '/login';
      }
    } finally {
      setLoading(false);
    }
  };
  //image handler
  /*
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProfileImage(file);

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  }
  */
  // Save Bio
  const saveBio = async () => {
    setSaving(true);
    try {
      const jwt = localStorage.getItem('jwt');
      await api.put('/auth/member/bio', { bio }, {
        headers: { Authorization: `Bearer ${jwt}` }
      });
      setMessage({ type: "success", text: "Bio updated successfully!" });
      setEditing(null);
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    } catch (error) {
      setMessage({ type: "error", text: "Failed to update bio" }, error);
    } finally {
      setSaving(false);
    }
  };

  // Save Social Links
  const saveSocialLinks = async () => {
    setSaving(true);
    try {
      const jwt = localStorage.getItem('jwt');
      await api.put('/auth/member/social-links', { socialLinks }, {
        headers: { Authorization: `Bearer ${jwt}` }
      });
      setMessage({ type: "success", text: "Social links updated!" });
      setEditing(null);
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    } catch (error) {
      setMessage({ type: "error", text: "Failed to update social links" }, error);
    } finally {
      setSaving(false);
    }
  };

  // Add Project
  const addProject = async () => {
    if (!newProject.title) return;
    
    const updatedProjects = [...projects, { ...newProject, id: Date.now() }];
    setProjects(updatedProjects);
    
    setSaving(true);
    try {
      const jwt = localStorage.getItem('jwt');
      await api.put('/auth/member/projects', { projects: updatedProjects }, {
        headers: { Authorization: `Bearer ${jwt}` }
      });
      setNewProject({ title: "", description: "", link: "" });
      setMessage({ type: "success", text: "Project added!" });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    } catch (error) {
      setMessage({ type: "error", text: "Failed to add project" }, error);
      setProjects(projects); // Revert on error
    } finally {
      setSaving(false);
    }
  };

  // Remove Project
  const removeProject = async (projectId) => {
    const updatedProjects = projects.filter(p => p.id !== projectId);
    setProjects(updatedProjects);
    
    setSaving(true);
    try {
      const jwt = localStorage.getItem('jwt');
      await api.put('/auth/member/projects', { projects: updatedProjects }, {
        headers: { Authorization: `Bearer ${jwt}` }
      });
      setMessage({ type: "success", text: "Project removed!" });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    } catch (error) {
      setMessage({ type: "error", text: "Failed to remove project" }, error);
      setProjects(projects); // Revert on error
    } finally {
      setSaving(false);
    }
  };

  // Add Skill
  const addSkill = async () => {
    if (!newSkill.trim()) return;
    
    const updatedSkills = [...skills, newSkill.trim()];
    setSkills(updatedSkills);
    
    setSaving(true);
    try {
      const jwt = localStorage.getItem('jwt');
      await api.put('/auth/member/skills', { skills: updatedSkills }, {
        headers: { Authorization: `Bearer ${jwt}` }
      });
      setNewSkill("");
      setMessage({ type: "success", text: "Skill added!" });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    } catch (error) {
      setMessage({ type: "error", text: "Failed to add skill" }, error);
      setSkills(skills); // Revert on error
    } finally {
      setSaving(false);
    }
  };

  // Remove Skill
  const removeSkill = async (skillIndex) => {
    const updatedSkills = skills.filter((_, i) => i !== skillIndex);
    setSkills(updatedSkills);
    
    setSaving(true);
    try {
      const jwt = localStorage.getItem('jwt');
      await api.put('/auth/member/skills', { skills: updatedSkills }, {
        headers: { Authorization: `Bearer ${jwt}` }
      });
      setMessage({ type: "success", text: "Skill removed!" });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    } catch (error) {
      setMessage({ type: "error", text: "Failed to remove skill" }, error);
      setSkills(skills); // Revert on error
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <>
        <FormHeader />
        <div className="dashboard-loading">Loading your profile...</div>
      </>
    );
  }

  return (
    <>
      <FormHeader />
      <button className={Styles.editBtn} onClick={() => window.location.href = '/onboarding'}>
            Edit Profile
          </button>
      <div className={Styles.dashboardContainer}>
        {/* Header with Profile Info */}
        <div className={Styles.dashboardHeader}>
          <div className={Styles.profileLeft}>
            {/* Profile Photo */}
            {imagePreview ? (
              <img 
              src={imagePreview ? 
                `${STRAPI_URL}${member.avatar.url}`
                : `https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=`
              }
              alt="profile"
              className={Styles.profilePic} />
            ) : (
              <div className={Styles.profilePic}>
                <p>No Image</p>
              </div>
            )}
            {/*
             <input
              placeholder="Here"
              className={Styles.fileInput} 
              type="file"
              accept="image/*"
              onChange={handleImage} />
              {profileImage && (
                <p>Selected: {profileImage.name}</p>
              )}
              <button className="save-btn" disabled={!profileImage}>Save Image</button>
              */}
          </div>
          <div className={Styles.dashboardHeaderRight}>
              <span className={Styles.nameContainer}>
                <h1 className={Styles.fullname}>{user?.username}</h1>
                <i>{member?.graduateLevel}</i>
              </span>
              <p><GraduationCap className={Styles.icon} /> {member?.major}</p>
              {member?.university && <p><School className={Styles.icon} /> {member.university}</p>}
              {/* Highlights Here */}
              <span className={Styles.highlights}>
                <p><Calendar className={Styles.icon} /> Expected Year of Gradution: {member?.expectedGradYear}</p>
                <p><User2Icon className={Styles.icon} /> Gender: {member?.gender}</p>
                <p><Cake className={Styles.icon} /> Age: {member?.age}</p>
                </span>
          </div>
        </div>
        <div className={Styles.aboutContainer}>
        {/* Message here */}
        {message.text && (
          <div className={`dashboard-message ${message.type}`}>
            {message.text}
          </div>
        )}

        {/* Bio goes here */}
        <h2> <Book />Bio</h2>
            {editing !== 'bio' && (
            <button className={Styles.editDashboardBtn} onClick={() => setEditing('bio')}>Edit</button>
          )}
          {editing === 'bio' ? (
            <div className="edit-form">
              <textarea
                className={Styles.bioForm}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows="4"
                placeholder="Tell us about yourself..."
              />
              <div className={Styles.bioAction}>
                <button onClick={saveBio} disabled={saving}>Save</button>
                <button onClick={() => setEditing(null)}>Cancel</button>
              </div>
            </div>
          ) : (
            <p className="bio-text">{bio || "No bio added yet. Click Edit to add one."}</p>
          )}
        </div>
          {/* Acedemic Information */}
        <div className={Styles.academicContainer}>
          <h3><School2Icon />Academic Information</h3>
          <div className={Styles.academicTable}>
            <table>
              <tbody>
                <tr>
                <th>University:</th>
                <td>{member?.university}</td>
              </tr>
              <tr>
                <th>Major:</th>
                <td>{member?.major}</td>
              </tr>
              <tr>
                <th>Degree Level:</th>
                <td>{member?.graduateLevel}</td>
              </tr>
              <tr>
                <th>Expected Graduation Year:</th>
                <td>{member?.expectedGradYear}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Skills Section */}
        <div className={Styles.skillsContainer}>
            <h2>Skills</h2>
          <div className={Styles.skillsBox}>
            {skills.map((skill, index) => (
              <div key={index} className={Styles.skillsTag}>
                {skill}
                <button onClick={() => removeSkill(index)} className={Styles.removeBtn}>×</button>
              </div>
            ))}
          </div>
          
          <div className="add-skill-form">
            <input
              className={Styles.inputField}
              type="text"
              placeholder="Add a skill (e.g., JavaScript, Public Speaking)"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addSkill()}
            />
            <button className={Styles.editDashboardBtn} onClick={addSkill} disabled={saving}>Add Skill</button>
          </div>
        </div>

        {/* Projects Section */}
        <div className={Styles.projectContainer}>
          <div className="section-header">
            <h2 className={Styles.center}>Projects Involved</h2>
          </div>
          
          <div className={Styles.projectBox}>
            {projects.map((project) => (
              <div key={project.id} className={Styles.projectCard}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={Styles.projectLink}>
                    View Project →
                  </a>
                )}
                <button onClick={() => removeProject(project.id)} className={Styles.removeProjectBtn}>
                  Clear
                </button>
              </div>
            ))}
          </div>
          
          <div className={Styles.addProjectForm}>
            <h3 className={Styles.subHeading}>Add New Project</h3>
            <input
            className={Styles.inputField}
              type="text"
              placeholder="Project Title"
              value={newProject.title}
              onChange={(e) => setNewProject({...newProject, title: e.target.value})}
            />
            <textarea
            className={Styles.bioForm}
              placeholder="Project Description"
              value={newProject.description}
              onChange={(e) => setNewProject({...newProject, description: e.target.value})}
              rows="3"
            />
            <input
            className={Styles.inputField}
              type="url"
              placeholder="Project Link (optional)"
              value={newProject.link}
              onChange={(e) => setNewProject({...newProject, link: e.target.value})}
            />
            <button className={Styles.addBtn} onClick={addProject} disabled={saving}>Add Project</button>
          </div>
        </div>

        {/* Social Links Section */}
        <div className={Styles.socialLinksContainer}>
          <div className="section-header">
            <h2>Social Links</h2>
            {editing !== 'social' && (
              <button className={Styles.editDashboardBtn} onClick={() => setEditing('social')}>Edit</button>
            )}
          </div>
          
          {editing === 'social' ? (
            <div className="edit-form">
              <div className={Styles.socialMediaInputs}>
                <input
                  className={Styles.inputField}
                  type="url"
                  placeholder="Facebook URL"
                  value={socialLinks.facebook}
                  onChange={(e) => setSocialLinks({...socialLinks, facebook: e.target.value})}
                />
                <input
                  className={Styles.inputField}
                  type="url"
                  placeholder="Instagram URL"
                  value={socialLinks.instagram}
                  onChange={(e) => setSocialLinks({...socialLinks, instagram: e.target.value})}
                />
                <input
                  className={Styles.inputField}
                  type="url"
                  placeholder="Twitter URL"
                  value={socialLinks.twitter}
                  onChange={(e) => setSocialLinks({...socialLinks, twitter: e.target.value})}
                />
                <input
                  className={Styles.inputField}
                  type="url"
                  placeholder="LinkedIn URL"
                  value={socialLinks.linkedin}
                  onChange={(e) => setSocialLinks({...socialLinks, linkedin: e.target.value})}
                />
                <input
                  className={Styles.inputField}
                  type="url"
                  placeholder="GitHub URL"
                  value={socialLinks.github}
                  onChange={(e) => setSocialLinks({...socialLinks, github: e.target.value})}
                />
                <input
                  className={Styles.inputField}
                  type="url"
                  placeholder="Personal Website"
                  value={socialLinks.website}
                  onChange={(e) => setSocialLinks({...socialLinks, website: e.target.value})}
                />
              </div>
              <div className={Styles.actionBtns}>
                <button onClick={saveSocialLinks} disabled={saving}>Save</button>
                <button onClick={() => setEditing(null)}>Cancel</button>
              </div>
            </div>
          ) : (
            <div className={Styles.socialLinks}>
              {socialLinks.facebook && <a href={socialLinks.facebook} target="_blank"> Facebook</a>}
              {socialLinks.instagram && <a href={socialLinks.instagram} target="_blank">Instagram</a>}
              {socialLinks.twitter && <a href={socialLinks.twitter} target="_blank">Twitter</a>}
              {socialLinks.linkedin && <a href={socialLinks.linkedin} target="_blank">LinkedIn</a>}
              {socialLinks.github && <a href={socialLinks.github} target="_blank">GitHub</a>}
              {socialLinks.website && <a href={socialLinks.website} target="_blank">Website</a>}
              {!socialLinks.facebook && !socialLinks.instagram && !socialLinks.twitter && 
               !socialLinks.linkedin && !socialLinks.github && !socialLinks.website && (
                <p>No social links added yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}


export default Dashboard;