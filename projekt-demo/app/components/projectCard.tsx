import { useState } from "react";
import type { Project, Goal } from "~/types/project";
import "./ProjectCard.css"; // Importera CSS för komponenten

export function ProjectCard(props: Project) {
  // Lokal state för målen
  const [goals, setGoals] = useState<Goal[]>(props.goals);
  // State för det nya målets namn
  const [newGoalName, setNewGoalName] = useState("");

  // Funktion som markerar ett mål som komplett baserat på index
  function completeGoal(index: number) {
    setGoals((prevGoals) =>
      prevGoals.map((goal, i) =>
        i === index ? { ...goal, isComplete: true } : goal
      )
    );
  }

  // Funktion för att lägga till ett nytt mål
  function addGoal() {
    if (newGoalName.trim() === "") return;
    const newGoal: Goal = {
      name: newGoalName.trim(),
      isComplete: false,
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
    setNewGoalName(""); // Rensa inmatningsfältet
  }

  return (
    <div className="project-card">
      <h2 className="project-title">{props.title}</h2>
      <div className="goal-list">
        {goals.map((goal, index) => (
          <div key={index} className="goal-item">
            <p className={`goal-text ${goal.isComplete ? "completed" : ""}`}>
              {goal.name} - {goal.isComplete ? "Completed" : "Incomplete"}
            </p>
            {!goal.isComplete && (
              <button
                className="complete-btn"
                onClick={() => completeGoal(index)}
              >
                Done
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="add-goal">
        <input
          type="text"
          placeholder="New goal"
          value={newGoalName}
          onChange={(e) => setNewGoalName(e.target.value)}
        />
        <br />
        <br />
        <button className="add-btn" onClick={addGoal}>
          Add Goal
        </button>
      </div>
    </div>
  );
}
