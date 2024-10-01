import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/TodoItem.css';

const TodoItem = ({ todo, onDelete, onEdit, isEditing, editText, onEditChange, onUpdate }) => {
  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            className="edit-input"
            type="text"
            value={editText}
            onChange={onEditChange}
          />
          <Button onClick={onUpdate}>수정 완료</Button>
        </>
      ) : (
        <>
          <span>{todo.task}</span>
          <Button onClick={onEdit}>수정 진행</Button>
        </>
      )}
      <Button onClick={onDelete}>삭제하기</Button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  editText: PropTypes.string.isRequired,
  onEditChange: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
