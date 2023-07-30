import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.pictures) {
    return (
      <section className="Photos">
        <h2 className="text-center mb-4">•Images•</h2>
        <div className="row">
          {props.pictures.photos.map(function (picture, index) {
            return (
              <div className="col-4" key={index}>
                <a
                  href={picture.src.original}
                  target="_blank"
                  rel="noreferrer "
                >
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
