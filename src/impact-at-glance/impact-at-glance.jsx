import React from "react";
import { ImpactAtStyle } from "./impact-at-glance-style";

const ImpactAtGlance = () => {
  return (
    <ImpactAtStyle>
      <div className="impact-at-glance">
        <div className="impact-at-glance__container__title">
          <h2>Impact at a <span>Glance</span></h2>
        </div>

        <div className="impact-at-glance__cards">
          <div className="card element1">
            <p>Colleges</p>
            <h3>100+</h3>
          </div>

          <div className="card element2">
            <p>Students</p>
            <h3>1,00,000</h3>
          </div>

          <div className="card element3">
            <p>Study Materials</p>
            <h3>1000+</h3>
          </div>

          <div className="card element4">
            <p>Professional Trainers</p>
            <h3>150</h3>
          </div>
        </div>
      </div>
    </ImpactAtStyle>
  );
};

export default ImpactAtGlance;
