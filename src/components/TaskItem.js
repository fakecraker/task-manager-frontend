const TaskItem = ({ task, onUpdate, onDelete }) => {
  return (
    <tr>
      <td>⭐</td> 
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>{task.completed ? "✅ Done" : "❌ Pending"}</td>
      <td>
        <button onClick={() => onUpdate(task)}>Update</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TaskItem;

