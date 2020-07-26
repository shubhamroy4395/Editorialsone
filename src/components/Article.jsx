import React from "react";
import loadingSpinner from "../static/img/loading-spinner.gif";
const Article = (props) => {
  const { detail } = props.location.state;
  let nameAndLink = detail.newspaperName.split('- ')
  console.log(nameAndLink)
  return (
    <>
      <div className="container article-detail" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '3.5vh'}}>
        <i style={{fontSize: '3.5rem', color: '#007bff', marginRight: '1%'}} className = "fas fa-newspaper"></i>
        <h2>Editorials One</h2>
      </div>
      {detail.title ? (
        <div className="container mb-5">
          <div className="container jumbotron mb-5">
            <h2 className="text text-primary mb-5"> {detail.title} </h2>
            <h5 className="long-text"> {detail.article} </h5>
          </div>
          <div className="container">
            <div className="extra-details">
              <p>
                {" "}
                {"Updated on : "} {detail.publishDate.substr(0, 16)}{" "}
              </p>
              <p>
                <a href={nameAndLink[1]}>{nameAndLink[0]}</a>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container loading-container">
          <img className="loading-spinner" src={loadingSpinner} alt="" />
        </div>
      )}
    </>
  );
};

export default Article;
