import { useState } from "react";
import type { Project, Goal } from "~/types/project";
import { ProjectCard } from "../components/projectCard";
import "./ProjectList.css";

export function ProjectList() {
  // Start med ett exempelprojekt i listan
  const [projects, setProjects] = useState<Project[]>([
    {
      title: "Example Project",
      goals: [{ name: "Initial goal", isComplete: false }],
    },
  ]);

  // Lokala state-variabler för användarens inmatning
  const [newTitle, setNewTitle] = useState("");
  const [newGoal, setNewGoal] = useState("");

  // Funktion för att lägga till ett nytt projekt
  function addProject() {
    if (!newTitle.trim() || !newGoal.trim()) return; // Om titeln eller målet är tomt, gör inget

    // Skapa ett nytt projekt; om ett initialt mål anges, lägg till det
    const newProject: Project = {
      title: newTitle,
      goals: newGoal.trim() ? [{ name: newGoal, isComplete: false }] : [],
    };

    // Uppdatera projektlistan och rensa input-fälten
    setProjects([...projects, newProject]);
    setNewTitle("");
    setNewGoal("");
  }

  return (
    <div>
      {/* Lista med befintliga projekt */}
      {projects.map((project, idx) => (
        <ProjectCard key={idx} title={project.title} goals={project.goals} />
      ))}

      {/* Formulär för att skapa ett nytt projekt */}
      <div className="new-project">
        <h3>Create New Project</h3>
        <input
          type="text"
          placeholder="Project title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Initial goal (optional)"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
        />
        <button onClick={addProject}>Add Project</button>
      </div>
    </div>
  );
}
