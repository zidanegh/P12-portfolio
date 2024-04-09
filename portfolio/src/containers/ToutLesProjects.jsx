import data from "../assets/code-projet.json";
import Filteur from "../components/Filter";
import { useSelector } from "react-redux";

export default function ToutLesProjects() {
  const projects = data.projects;
  const chosen = useSelector((state) => state.chosenLogo);
  const chosenTag = chosen.chosenLogo;

  const filtration =
    chosenTag === "ALL"
      ? projects
      : projects.filter((project) => project.tags.includes(chosenTag));
  console.log(filtration);

  return (
    <>
      <Filteur />
      <div className="cardWapper">
        {filtration.map((project) => (
          <div className="card" key={project.id + "card"}>
            <img src={project.image} alt={project.alt} />
            <div className="container">
              <h4>
                <b>{project.name}</b>
              </h4>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
