/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import Styles from "./Page.module.css";
const CareerType = ( {image,title,description,date} ) => {
    return(
        <>
         <div className={Styles["career-container"]}>
    <img src={image} alt="CareerType" />
          <h2 className={Styles["title"]}>{title}</h2>
          <p className={Styles["descrip"]}>{description}</p>
          <p className={Styles["date"]}>Last Update: {date}</p>
        </div>
        </>
    )
};
CareerType.propTypes= {
    image:PropTypes.string,
    title:PropTypes.string,
    description:PropTypes.string,
    date:PropTypes.string,
  
  };
  const Career = ( {Careerdata} ) => {
    return (
      <div className={Styles["career"]}>
      {Careerdata.map((car) => (
         <CareerType {...car} key={car.id} />
      ))}
      </div>
    )
  }
  
  Career.propTypes ={
    Careerdata:PropTypes.array,
    }

  export default Career;