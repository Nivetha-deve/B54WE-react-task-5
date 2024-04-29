/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import Styles from "./Page.module.css";
const DataScienceType = ( {image,title,description,date} ) => {
    return(
        <>
         <div className={Styles["data-container"]}>
    <img src={image} alt="DatascienceType" />
          <h2  className={Styles["title"]}>{title}</h2>
          <p className={Styles["descrip"]}>{description}</p>
          <p className={Styles["date"]}>Last Update: {date}</p>
        </div>
        </>
    )
};

DataScienceType.propTypes= {
    image:PropTypes.string,
    title:PropTypes.string,
    description:PropTypes.string,
    date:PropTypes.string,
  
  };
  const DataScience = ( {DataSciencedata} ) => {
    return (
      <div className={Styles["data"]}>
      {DataSciencedata.map((data) => (
         <DataScienceType {...data} key={data.id} />
      ))}
      </div>
    )
  }
  
  DataScience.propTypes ={
    DataScience:PropTypes.array,
    }
export default DataScience;