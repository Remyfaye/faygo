import React from "react";
import TripData from "./TripData";
import img1 from "../../assets/ti2.jpeg";
import img2 from "../../assets/ti3.jpg";
import img3 from "../../assets/ti5.avif";
import img4 from "../../assets/ti6.avif";

function ResentTrips() {
  return (
    <div className="trip">
      <h1>resent trips</h1>
      <p>you can discover unique destinations using google maps</p>

      <div className="trip-card">
        <TripData
          image={img1}
          heading="trip to indonesia"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing 
      elit. Blanditiis id saepe fugiat culpa ex consequatur eaque vitae quidem, distinctio cum assumenda deleniti, ad laborum
       repellat aliquam, tenetur accusamus voluptatibus vero."
        />

        <TripData
          image={img2}
          heading="trip to afganistan"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing 
      elit. Blanditiis id saepe fugiat culpa ex consequatur eaque vitae quidem, distinctio cum assumenda deleniti, ad laborum
       repellat aliquam, tenetur accusamus voluptatibus vero."
        />

        <TripData
          image={img3}
          heading="trip to peru"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing 
      elit. Blanditiis id saepe fugiat culpa ex consequatur eaque vitae quidem, distinctio cum assumenda deleniti, ad laborum
       repellat aliquam, tenetur accusamus voluptatibus vero."
        />

        <TripData
          image={img4}
          heading="trip to paris"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing 
      elit. Blanditiis id saepe fugiat culpa ex consequatur eaque vitae quidem, distinctio cum assumenda deleniti, ad laborum
       repellat aliquam, tenetur accusamus voluptatibus vero."
        />
      </div>
    </div>
  );
}

export default ResentTrips;
