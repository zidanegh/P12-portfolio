import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import data from "../assets/code-projet.json";

export default function Caroussel() {
  const projects = data.projects;
  console.log(projects);
  return (
    <MDBCarousel showControls showIndicators>
      {projects.map((project) => (
        <MDBCarouselItem key={project.id}>
          <img src={project.image} className="d-block w-100" alt="..." />
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
  );
}
