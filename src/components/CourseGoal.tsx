import { 
  // FC,
  type PropsWithChildren, 
  // type ReactNode, 
} from "react";

// interface CourseGoalProps {
//   title: string; 
//   children: ReactNode
// }

type CourseGoalProps = PropsWithChildren<{ title: string, id: number, onDelete: (id: number) => void }>

export default function CourseGoal (
  { title, children, id, onDelete } : CourseGoalProps
) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
  )
}

// another approach to create

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>DELETE</button>
//     </article>
//   )
// }

// export default CourseGoal;