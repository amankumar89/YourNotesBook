import { useState } from "react";
import goalsImage from './assets/goals.jpg';
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal (goal: string, summary: string) {
    if(!goal || !summary) return;
    
    setGoals((prevGoals) => {
      const newGoals: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoals];
    })
  };

  function handleDeleteGoal (id: number) {
    setGoals((prevGoals) => prevGoals.filter(goals => goals.id !== id));
  }

  return (
    <main>
      <Header
        image={{
          src: goalsImage,
          alt: 'A list of goals'
        }}
      >
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal 
        onAddGoal={handleAddGoal} 
      />
      <CourseGoalList 
        goals={goals} 
        onDeleteGoal={handleDeleteGoal}
      />
    </main>
  )
}
