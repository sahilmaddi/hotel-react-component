import React from "react";
import resort1 from "../images/resort1.jpg";
import resort2 from "../images/resort2.jpg";
import resort3 from "../images/resort3.jpg";
import resort4 from "../images/resort4.jpg";
import "./NewResorts.css"
const NewResort = () => {
  return (
    <div className=" container row gx-lg-3 mb-1 align-items-center">
        <h3 className="h3a"><center>Exclusive Resorts</center></h3>
      <div className=" col-md-6 mb-4 mb-md-0">
        <img
          src={resort1}
          className="w-100 shadow-4-strong rounded-4 mb-4"
          alt=""
          data-builder-edit="image"
          data-builder-name="image1"
          aria-controls="#picker-editor"
          draggable="false"
        />
      </div>
      <div className="col-md-6 mb-4 mb-md-0">
        <h3
          className="fw-bold"
          data-builder-edit="text"
          data-builder-name="text2"
          contenteditable="true"
        >
          The Marina Drive
        </h3>
        <div className="mb-2 text-danger small"></div>
       
      </div>
      <div className="row gx-lg-5 mb-5 flex-lg-row-reverse align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={resort2}
            className="w-100 shadow-4-strong rounded-4 mb-4"
            alt=""
            data-builder-edit="image"
            data-builder-name="image2"
            aria-controls="#picker-editor"
            draggable="false"
          />{" "}
        </div>
        <div className="col-md-6 mb-4 mb-md-0">
          <h3
            className="fw-bold"
            data-builder-edit="text"
            data-builder-name="text6"
            contenteditable="true"
          >
            Asiatic Aqua Dream
          </h3>
        </div>
      </div>
      <div className=" col-md-6 mb-4 mb-md-0">
        <img
          src={resort3}
          className="w-100 shadow-4-strong rounded-4 mb-4"
          alt=""
          data-builder-edit="image"
          data-builder-name="image1"
          aria-controls="#picker-editor"
          draggable="false"
        />
      </div>
      <div className="col-md-6 mb-4 mb-md-0">
        <h3
          className="fw-bold"
          data-builder-edit="text"
          data-builder-name="text2"
          contenteditable="true"
        >
         The Malibu April
        </h3>
        <div className="mb-2 text-danger small"></div>
       
      </div>
      <div className="row gx-lg-5 mb-5 flex-lg-row-reverse align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={resort4}
            className="w-100 shadow-4-strong rounded-4 mb-4"
            alt=""
            data-builder-edit="image"
            data-builder-name="image2"
            aria-controls="#picker-editor"
            draggable="false"
          />{" "}
        </div>
        <div className="col-md-6 mb-4 mb-md-0">
          <h3
            className="fw-bold"
            data-builder-edit="text"
            data-builder-name="text6"
            contenteditable="true"
          >
            The Lockness Waffle
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NewResort;
