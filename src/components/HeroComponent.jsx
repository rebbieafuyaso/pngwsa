import Styles from './HeroComponent.module.css';
function HeroComponent({title, subtitle, text}) {
  return(
    <div className={Styles.heroComponentOverlay} >
      <h6>{subtitle}</h6>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
export default HeroComponent;