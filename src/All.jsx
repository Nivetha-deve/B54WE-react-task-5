/* eslint-disable react/prop-types */
import propTypes from "prop-types";
import Styles from "./Page.module.css";
const AllType = ( {image,title,description,date} ) => {
  return (
    <> 
    <div className={Styles["all-container"]}>
    <img src={image} alt="AllType" />
          <h2 className={Styles["title"]}>{title}</h2>
          <p className={Styles["descrip"]}>{description}</p>
          <p className={Styles["date"]}>Last Update: {date}</p>
        </div>
   </>
  )
};

AllType.propTypes= {
  image:propTypes.string,
  title:propTypes.string,
  description:propTypes.string,
  date:propTypes.string,

};
const All = ( {Alldata} ) => {
  return (
    <div className={Styles["all"]}>
    {Alldata.map((all) => (
       <AllType {...all} key={all.id} />
    ))}
    </div>
  )
}

All.propTypes ={
  Alldata:propTypes.array,
  
}

export default All;