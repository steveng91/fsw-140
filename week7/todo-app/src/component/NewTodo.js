import React, {useState} from 'react'

const initInputs = {
    todo: "",
    message: ""
}

export default function NewTodo(props) {

    const [inputs, setInputs] = useState(initInputs)
    const {addTodo} = props

    function handleChange(e){
        const {name, value} = e.target
        setInputs(previnputs => ({
            ...previnputs,
            [name]: value
        }))
    }
    
    function handleSubmit(e){
        e.preventDefault()
        addTodo(inputs)
        setInputs(initInputs)
    }

    const { todo, message } = inputs

    return (
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={todo}
        name="todo"
        onChange={handleChange}
        placeholder="todo"
        />
           <input
            type="text"
            value={message}
            name="message"
            onChange={handleChange}
            placeholder="message"
            />
            <button>Add Todo</button>
    </form>
    )
}