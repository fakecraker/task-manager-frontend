import { useState } from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 576px) {
    padding: 1.5rem;
    width: 95%;
    margin: 0 10px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  span {
    color: #fde047;
  }

  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 576px) {
    gap: 0.3rem;
  }
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 1.2rem;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  @media (max-width: 576px) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  
  &.save {
    background: #22c55e;
    color: white;
  }
  
  &.cancel {
    background: #dc2626;
    color: white;
  }

  @media (max-width: 576px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
  }
`;

const TaskForm = ({ onSubmit, initialTask, onClose }) => {
  const [title, setTitle] = useState(initialTask?.title || "");
  const [description, setDescription] = useState(initialTask?.description || "");
  const [completed, setCompleted] = useState(initialTask?.completed || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    onSubmit({ title, description, completed });
    onClose();
  };

  return (
    <Modal>
      <FormContainer>
      <Title>
      {initialTask ? 'EDIT THE ' : 'ADD NEW '}<span>TASK</span>
        </Title>
        <StyledForm onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Title:</Label>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>Description:</Label>
            <Input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>
              <Input
                type="checkbox"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
              />
              Completed
            </Label>
          </InputGroup>

          <ButtonGroup>
            <Button type="submit" className="save">Save</Button>
            <Button type="button" className="cancel" onClick={onClose}>
              Cancel
            </Button>
          </ButtonGroup>
        </StyledForm>
      </FormContainer>
    </Modal>
  );
};

export default TaskForm;