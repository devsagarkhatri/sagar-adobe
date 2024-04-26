import React, { useState } from "react";
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img4.jpg";
import img3 from "./assets/images/img3.jpg";

function Home() {
  let [index, changeIndex] = useState(0);
  const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
  const path = "./assets/images/";

  let clickPrev = (e) => {
    changeIndex((index - 1 + images.length) % images.length);
  };

  let clickNext = (e) => {
    changeIndex(() => (index + 1) % images.length);
  };

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to my SPA!</p>
      <div id="gallery">
        {/* <img id="image" src={path + images[index]} alt="Image 1" /> */}
        <h1>{index + 1}</h1>
        <br />
        <button id="prevBtn" onClick={(e) => clickPrev(e)}>
          Previous
        </button>
        <button id="nextBtn" onClick={(e) => clickNext(e)}>
          Next
        </button>
      </div>
      <br />
      <br />
      <div class="banner-half">
        <img id="image" src={img1} alt="banner 1" />
        <img id="image" src={img2} alt="banner 2" />
        <img id="image" src={img3} alt="banner 3" />
      </div>
    </div>
  );
}

export default Home;
