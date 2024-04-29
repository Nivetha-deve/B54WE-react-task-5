/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import Styles from "./Page.module.css";
const CyberSecurityType = (  {image,title,description,date} ) => {
    return(
        <>
          <div className={Styles["cyber-container"]}>
    <img src={image} alt="CyberSecurityType" />
          <h2 className={Styles["title"]}>{title}</h2>
          <p className={Styles["descrip"]}>{description}</p>
          <p className={Styles["date"]}>Last Update: {date}</p>
        </div>
        </>
    )
};

CyberSecurityType.propTypes= {
    image:PropTypes.string,
    title:PropTypes.string,
    description:PropTypes.string,
    date:PropTypes.string,
  
  };
  const CyberSecurity = ( {CyberSecuritydata} ) => {
    return (
      <div className={Styles["cyber"]}>
      {CyberSecuritydata.map((cyb) => (
         <CyberSecurityType {...cyb} key={cyb.id} />
      ))}
      </div>
    )
  }
  
  CyberSecurity.propTypes ={
    Careerdata:PropTypes.array,
    }


export default CyberSecurity;