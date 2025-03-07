import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  return (
    <div>
      <h3>Your Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
