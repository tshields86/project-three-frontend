import React from 'react';
const AddStyle = {
  border: '1px solid navy'
}

function AddTask(props) {
  return (
    <div>
      <h2>Add Task</h2>
      <div style={AddStyle}>
        <form>
          <div>
            <p><b>My Tasks: </b><br/><input type='text' name='mytask'/></p>
            Date: <input type='date' name='date' className='date' />
            <br/><br/>
            Location: <input type='text' name='' className='location'/>
            <br/><br/>
            Task Category:
            <br/>
            <select name="taskCategory">
              <option value="personal">Personal</option>
              <option value="school">School</option>
              <option value="work">Work</option>
              <option value="other">Other</option>
            </select>
            <br/><br/>
            Time:
            <br/>
            <input type='time' />
            <br/><br/>
            Detail:
            <br/>
            <textarea name='task-description'
                      maxLength='140'
                      placeholder='(Detail description...)'
                      />
          </div>
          <br/>
          <div>
            <button className='task-add-btn' type='button'>Add Task(+)</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask;
