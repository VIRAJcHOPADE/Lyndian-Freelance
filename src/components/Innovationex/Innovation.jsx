import React from "react";
import "./Innovation.css";

const InnovationContainer = ({ image, title, backgroundImage }) => {
  return (
    <>
      <a style={{ textDecoration: "none" }} href="">
        <div className="hover-container">
          <div className="InnovationBackImage">
            <img
              className="InnovationBackImg"
              src={`${backgroundImage}`}
              alt=""
            />
          </div>
          <div className="hover-content">
            <img className="Innovationimage" src={`${image}`} alt="" />
            <span className="InnovationP">{title}</span>
          </div>
        </div>
      </a>
    </>
  );
};
const Innovation = () => {
  const Innovationarr = [
    {
      image:
        "https://www.kinaxis.com/sites/default/files/styles/max_650x650_webp/public/paragraphs/block-list/plane-icon-white.png.webp?itok=qZ7ObwqD",
      title: "Agri Business",
      backgroundImage:
        "https://media.istockphoto.com/id/1289962301/photo/young-male-engineer-checking-the-airplane-jet.jpg?s=612x612&w=0&k=20&c=b1x4eFxpeJ4dwpfW4wNfFzBUSCiB-A9Oc_UkBgYxTfg=",
    },
    {
      image:
        "https://www.kinaxis.com/sites/default/files/styles/max_650x650_webp/public/paragraphs/block-list/car-icon-white.png.webp?itok=_zaf1OV7",
      title: "Diary",
      backgroundImage:
        "https://media.istockphoto.com/id/182668513/photo/automotive-industry.jpg?s=612x612&w=0&k=20&c=-TczpCGXZXBjqTAPdLoukjbZCtEHu8QfGbJJuFFT4rA=",
    },
    {
      image:
        "https://www.kinaxis.com/sites/default/files/styles/max_650x650_webp/public/paragraphs/block-list/products-icon-white.png.webp?itok=fDXvul_B",
      title: "Retil",
      backgroundImage:
        "https://img.freepik.com/free-photo/female-warehouse-workers-checking-cardboard-box-before-final-packing-while-working-distribution-warehouse_637285-3972.jpg",
    },
    {
      image:
        "https://www.kinaxis.com/sites/default/files/styles/max_650x650_webp/public/paragraphs/block-list/computer-chip-icon-white.png.webp?itok=tTpabA3o",
      title: "FMCG & CPG",
      backgroundImage:
        "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlnaCUyMHRlY2h8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
      image:
        "https://www.kinaxis.com/sites/default/files/styles/max_650x650_webp/public/paragraphs/block-list/factory-icon-white.png.webp?itok=69nm556P",
      title: "MRO & Spares",
      backgroundImage:
        "https://media.istockphoto.com/id/1352464951/photo/concentrated-engineer-working-with-laptop-during-night-shift-in-gas-and-oil-industry-station.jpg?s=612x612&w=0&k=20&c=bhgu7PYlDG3rdd-0IKRTEm0vt2mv8TGMbxi3rvRTLFE=",
    },
    {
      image:
        "https://www.kinaxis.com/sites/default/files/styles/max_650x650_webp/public/paragraphs/block-list/test-tube-icon-white.png.webp?itok=CA9uOqHT",
      title: "Pharmaceuticals",
      backgroundImage:
        "https://media.istockphoto.com/id/1309776503/photo/female-medical-research-scientist-looks-at-biological-samples-before-analysing-it-under.jpg?s=612x612&w=0&k=20&c=U2weZr2beZqnJIf5DBgoQZG-e8gCEk--OcVDdmF3T7I=",
    },
    
  ];

  return (
    <>
      <div className="main-container-innovation">
        <h2 className="heading-innovation">
          Innovation and expertise in your industry
        </h2>
        <div className="InnovationContainerDIv">
          {Innovationarr.map((ele, key) => (
            <InnovationContainer
              image={ele.image}
              title={ele.title}
              backgroundImage={ele.backgroundImage}
              key={key}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Innovation;
