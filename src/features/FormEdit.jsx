import React, { useState } from 'react'
import { axiosInstance } from '../config'
import './inputForm.css'

const FormEdit = ( {dumpData} ) => {

    const [editDate, setEditDate] = useState(dumpData.dateline)
    const [editTodo, setEditTodo] = useState(dumpData.todo)
    const [editPriority, setEditPriority] = useState(dumpData.priority)

    const handleSubmit = async (e) => {
        const id = dumpData._id;
        const updateTodo = {
            date: editDate,
            todo: editTodo,
            priority: editPriority
        }
        try {
            await axiosInstance.put(`/update/${id}`, updateTodo)
            console.log('update Success');
        } catch (error) {
            console.log(error);
        }
        
        e.preventDefault();
    }



    return (
        <div>
            <div>
                <div className='headerEdit'>edit to do</div>
                <div className='editF'>
                    <form className='ltdForm editLtd'>
                        <div className='iForm'>
                            <label htmlFor='date'>Date</label>
                            <input type='text' id='date' name="date" value={editDate} onChange={(e) => setEditDate(e.target.value)} />
                        </div>
                        <div className='iForm'>
                            <label htmlFor='todo'>To Do</label>
                            <textarea id='todo' name="todo" rows="5" cols="50" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
                        </div>
                        <div className='iForm' onChange={(e) => setEditPriority(e.target.value)}>
                            <label htmlFor='todo'>Priority</label>
                            {editPriority ?
                                <div className='radioF'>
                                    <label className='iRadio'>
                                        <input type="radio" id='priority' name="priority" value={true} defaultChecked />
                                        Yes
                                    </label>
                                    <label className='iRadio'>
                                        <input type="radio" id='priority' name="priority" value={false} />
                                        No
                                    </label>
                                </div>
                                : <div className='radioF'>
                                    <label className='iRadio'>
                                        <input type="radio" id='priority' name="priority" value={true} />
                                        Yes
                                    </label>
                                    <label className='iRadio'>
                                        <input type="radio" id='priority' name="priority" value={false} defaultChecked/>
                                        No
                                    </label>
                                </div>}

                        </div>
                        <button onClick={handleSubmit} className="submitBtn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormEdit