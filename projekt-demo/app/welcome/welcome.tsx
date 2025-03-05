import { ProjectCard } from "~/components/projectCard";
import { ProjectList } from "~/components/projectList";

export function Welcome() {
  return (
    <div>
      <h1>To-do</h1>
      <ProjectList />
    </div>
  );
}
