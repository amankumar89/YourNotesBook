import CourseGoal from "./components/CourseGoal";
import goalsImage from './assets/goals.jpg';
import Header from "./components/Header";

export default function App() {
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
      <CourseGoal
        title="Learn React + TS"
      >
        <p>Learn react + typescript from ground up</p>
      </CourseGoal>
    </main>
  )
}
