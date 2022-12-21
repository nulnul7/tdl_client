import React, { useState } from 'react'
import { createContext } from 'react'
import { DBdummy } from './Dummy'


export const DBTodoContext = createContext()


const DBContextProvider = ({ children }) => {

    const [DBTodo, setDBTodo] = useState([])


    function editTodoSelect(id) {
        const getDB = DBdummy.find(item => item._id === id);
        setDBTodo(getDB);
    }

    return (
        <DBTodoContext.Provider value={{ DBTodo: DBTodo, editTodoSelect: editTodoSelect }}>
            {children}
        </DBTodoContext.Provider>
    )
}

export default DBContextProvider