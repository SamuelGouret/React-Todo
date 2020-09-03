import React, {useState} from 'react';
import '../style/todo.css';

const initialFormData = Object.freeze({
    title: "",
    description: ""
});

function Todo() {

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
          ...formData,
    
          // Trimming any whitespace
          [e.target.name]: e.target.value.trim()
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        // ... submit to API or something
    };

    return (

        <div>
            <form>
                <label for="title">Title:</label><br/>
                <input type="text" id="title" name="title" onChange={handleChange}/><br/><br/>

                <label for="description">Description:</label><br/>
                <input type="text" id="description" name="description" onChange={handleChange}/><br/><br/>

                <input type="submit" value="Submit" onClick={handleSubmit}/>
            </form>

        </div>

    )
}

export default Todo;