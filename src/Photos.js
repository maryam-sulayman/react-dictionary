import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.pictures) {
    return (
      <section className="Photos">
        <div className="row">
          {props.pictures.photos.map(function (picture, index) {
            return (
              <div className="col-4" key={index}>
                <a href={picture.src.original} target="_blank">
                  <img src={picture.src.landscape} className="img-fluid mb-4" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
