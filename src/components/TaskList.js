import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: white;
`;

const Th = styled.th`
  padding: 15px;
  text-align: left;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  font-size: 1.2rem;
`;

const Td = styled.td`
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  margin: 0 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: opacity 0.2s;

  &.edit {
    background: #3b82f6;
    color: white;
  }

  &.delete {
    background: #dc2626;
    color: white;
  }

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 576px) {
    padding: 4px 8px;
    font-size: 0.8rem;
  }
`;

const StatusIcon = styled.span`
  color: ${props => props.completed ? '#4CAF50' : '#FF5252'};
  font-size: 1.2rem;
`;

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>No</Th>
          <Th>Task-title</Th>
          <Th>Description</Th>
          <Th>Status</Th>
          <Th>Actions</Th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={task.id}>
            <Td>{index + 1}</Td>
            <Td>{task.title}</Td>
            <Td>{task.description}</Td>
            <Td>
              <StatusIcon completed={task.completed}>
                {task.completed ? '✓' : '✗'}
              </StatusIcon>
            </Td>
            <td>
              <ActionButton className="edit" onClick={() => onUpdate(task)}>
                Edit
              </ActionButton>
              <ActionButton className="delete" onClick={() => onDelete(task.id)}>
                Delete
              </ActionButton>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TaskList;