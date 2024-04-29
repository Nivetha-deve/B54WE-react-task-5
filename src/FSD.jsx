/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import Styles from "./Page.module.css";
const FSDType = ( {image,title,description,date} ) => {
  return (
    <> 
    <div className={Styles["fsd-container"]}>
    <img src={image} alt="fsdType" />
          <h2 className={Styles["title"]}>{title}</h2>
          <p className={Styles["descrip"]}>{description}</p>
          <p className={Styles["date"]}>Last Update:{date}</p>
        </div>
   </>
  )
};

FSDType.propTypes= {
  image:PropTypes.string,
  title:PropTypes.string,
  description:PropTypes.string,
  date:PropTypes.string,

};
const FSD = ( {FSDdata} ) => {
  return (
    <div className={Styles["fsd"]}>
    {FSDdata.map((fsd) => (
       <FSDType {...fsd} key={fsd.index} />
    ))}
    </div>
  )
}

FSD.propTypes ={
  FSDdata:PropTypes.array,  
}

export default FSD;
