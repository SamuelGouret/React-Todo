import React from 'react';
import '../style/todo.css';

function Todo() {

    return (

        <div>
            <form>
                <label for="title">Title:</label><br/>
                <input type="text" id="title" name="title"/><br/><br/>

                <label for="description">Description:</label><br/>
                <input type="text" id="description" name="description"/><br/><br/>

                <input type="submit" value="Submit"/>
            </form>

        </div>

    )
}

export default Todo;