"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    id: 1,
    title: "Social Media Design ",
    type: "img",
    src: "https://t.me/Portfolio_Umar",
    img: "assets/img/projects/111.jpg",
    project: "Social Media Design",
    client: "Freelance",
    previewLink: "https://t.me/Portfolio_Umar",
  },
  {
    id: 2,
    title: "Logo",
    type: "logo",
    src: "https://t.me/Portfolio_Umar",
    img: "assets/img/projects/4.jpg",
    project: "Logo",
    client: "Freelance",
    previewLink: "https://t.me/Portfolio_Umar",
  },
  {
    id: 3,
    title: "Manipulation Design",
    type: "local_video",
    src: "https://t.me/Portfolio_Umar",
    img: "assets/img/projects/55.jpg",
    project: "Manipulation Design",
    client: "Freelance",  
    previewLink: "https://t.me/Portfolio_Umar/180",
  }
];

const Portfolio = () => {
  const { popupToggle } = useContext(TunisContext);
  return (
    <SectionContainer id="portfolio">
      <div className="w-full pb-60">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"portfolio"}
          colorTitle={"ishlarim"}
          normalTitle={"Mening"}
        />
        {/* Section Title Ends */}
        {/* Portfolio Items Starts */}
        <div className="-mt-15 pb-60 xs:pb-20 portfolio">
          <div
            id="grid-gallery"
            className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto"
          >
            {/* Portfolio Grid Starts */}
            <div className="grid-wrap mx-auto mb-25">
              <ul className="gridlist">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0"
                    onClick={() => popupToggle(item)}
                  >
                    <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                      <img
                        className="block relative w-full rounded-5 transition duration-300"
                        src={item.img}
                        alt=""
                      />
                      <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                        <span className="uppercase text-fs-18 text-white">
                          {item.title}
                        </span>
                      </div>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
            {/* Portfolio Grid Ends */}
          </div>
        </div>
        {/* Portfolio Items Ends */}
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
