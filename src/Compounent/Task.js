import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, updateTodoAtIndex }) => {
  
  return (
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
      <textarea className='task-text' type="text" id={task.id} value={task.text} onChange={(e) => updateTodoAtIndex(e, task.id)}/>
        
        <span>
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)} 
          className='delete-icon'
        />
         {/* <TiEdit
          onClick={() => onUpdate(task.id)}
          className='edit-icon'
        /> */}
        </span>
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task