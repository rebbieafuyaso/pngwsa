import { useState } from "react";
import FormHeader from "../components/FormHeader";
import Styles from './Dashboard.module.css';
const STRAPI_URL = `http://localhost:1337`;
import { Camera } from 'lucide-react'

function Temlate() {
  const [imagePreview, setImagePreview] = useState(null);
  return (
    <>
      <FormHeader />
      <div className={Styles.dashboardContainer}>
        <div className={Styles.dashboardHeader}>
          <div classNale={Styles.dashboardHeaderLeft} >
            {/* Profile Picture Section */}
            {imagePreview ? (
              <img 
              src={
                imagePreview ? 
                `${STRAPI_URL}${member.avatar.url}`
                : `https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=`
              }
              alt="profile"
              className={Styles.profilePic} />
            ) : (
              <div className={Styles.profilePic} >
                <p>No Image</p>
              </div>
            )}
            {/* Camera Button Overlay */}
            <label>
              <input
              className={Styles.fileInput}
              type="file"
              accept="image/*"
              onChange={handleImage}
            />
            <Camera />
            </label>
            {profileImage && (
              <div className={Styles.selectedFile}>
                New Image Selected: {profileImage.name}
              </div>
            )}
          </div>
          <div className={Styles.dashboardHeaderRight}>

          </div>
        </div>
      </div>
    </>
  )
}

export default Temlate;