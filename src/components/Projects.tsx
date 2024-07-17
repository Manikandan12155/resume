import React from "react";
import { Carousel } from "primereact/carousel";
import { ProjectsData } from "../ProjectTools/ProjectsData";
import { CardData, cardTemplate } from "../ProjectTools/cardTemplate";
import { responsiveOptions } from "../ProjectTools/responsiveOptions";
const Projects: React.FC = () => {
  const cardsData: CardData[] = ProjectsData;

  return (
    <div className="Projects ">
      <h3>Projects</h3>
      <Carousel
        value={cardsData}
        itemTemplate={cardTemplate}
        numVisible={2}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        prevIcon="pi pi-chevron-left"
        nextIcon="pi pi-chevron-right"
      />
    </div>
  );
};

export default Projects;
