import Styles from './Header.module.css';

function FormHeader() {
  return(
    <div className={Styles.header}>
      <div className={Styles.logoSection}>
        <img className={Styles.logoImg} src="/pngwsa.png" />
        <p><strong className={Styles.logo}>
          <span>
            Papua New Guinea
          </span>
          <span>
            Wuhan Students Association
          </span>
          </strong></p>
      </div>
    </div>
  )
}
export default FormHeader;