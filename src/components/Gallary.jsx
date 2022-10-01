import React from "react";
import bora from "../assets/borabora.jpg";
import bora1 from "../assets/borabora2.jpg";
import bora2 from "../assets/keywest.jpg";
import bora3 from "../assets/maldives.jpg";
import bora4 from "../assets/maldives2.jpg";
import bora5 from "../assets/maldives3.jpg";
import GallaryComponent from "./GallaryComponent";

const Gallary = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto w-full px-4 py-16 gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
      <GallaryComponent title="Maldives" img={bora}></GallaryComponent>
      <GallaryComponent title="Keywest" img={bora1}></GallaryComponent>
      <GallaryComponent title="Madagascar" img={bora2}></GallaryComponent>
      <GallaryComponent title="Singapore" img={bora3}></GallaryComponent>
      <GallaryComponent title="Kerela" img={bora4}></GallaryComponent>
      <GallaryComponent title="Dubai" img={bora5}></GallaryComponent>
    </div>
  );
};

export default Gallary;
