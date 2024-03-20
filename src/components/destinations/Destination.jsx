import React from "react";
import img1 from "../../assets/uti2.avif";
import img2 from "../../assets/uti4.avif";
import img3 from "../../assets/uti1.avif";
import img4 from "../../assets/uti4.avif";
import "./destination.css";
import DestinationData from "./DestinationData";
import { Link } from "react-router-dom";

function Destination() {
  return (
    <div className="destination">
      <h1>Popular destinations</h1>
      <p>Tours give you the opportunity to see a lot within a time frame</p>

      {/* <a href="/about" className="image"> */}
      <DestinationData
        className="first-des"
        heading="The Enigmatic Faroe Islands:"
        text="Nestled in the North Atlantic Ocean, 
       the Faroe Islands are a group of 18 pristine, rugged 
       islands that promise a unique escape. With their dramatic 
       cliffs, lush valleys, and vibrant communities, 
       these islands offer a blend of natural beauty and 
       cultural intrigue. "
        img1={img1}
        img2={img2}
      />
      {/* </a> */}

      <DestinationData
        className="first-des-reverse"
        heading="Bhutan: The Land of Happiness"
        text="Nestled in the North Atlantic Ocean, the Faroe Islands are a group of 18 pristine, rugged islands that promise a unique escape. With their dramatic cliffs, lush valleys, and vibrant communities, these islands offer a blend 
       of natural beauty and cultural intrigue"
        img1={img3}
        img2={img4}
      />

      <DestinationData
        className="first-des"
        heading="Slovenia's Fairytale Lake Bled"
        text="Lake Bled is a true European gem, often described as a fairytale come to life. With a charming island in the center topped by a picturesque church 
       and a medieval castle perched on the cliffs, it's a 
       sight to behold"
        img1={img1}
        img2={img2}
      />
    </div>
  );
}

export default Destination;
