const TaskItem = ({ task, onUpdate, onDelete }) => {
    return (
      <li>
        <span>{task.title}</span>
        <button onClick={() => onUpdate(task.id, { ...task, completed: !task.completed })}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </li>
    );
  };
  
  export default TaskItem;
  