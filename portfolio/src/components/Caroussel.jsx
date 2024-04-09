import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import data from "../assets/code-projet.json";

export default function Caroussel() {
  const projects = data.bigprojects;

  if (!projects) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grosProjet">
      <h2>Présentation gros projet</h2>
      <div className="Carousel">
        <MDBCarousel showControls showIndicators>
          {projects.map((project) => (
            <MDBCarouselItem key={project.id}>
              <img
                src={project.image}
                className="d-block w-100"
                alt={project.alt}
              />
              <a href={project.gitHub}>
                <MDBCarouselCaption>
                  <div className="carousel-description">
                    <h5>{project.name}</h5>
                    <p>{project.description}</p>
                  </div>
                </MDBCarouselCaption>
              </a>
            </MDBCarouselItem>
          ))}
        </MDBCarousel>
      </div>
    </div>
  );
}
