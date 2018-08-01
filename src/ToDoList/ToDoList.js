import React, { Component } from 'react';

class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            inputList: [],
            ClearValue: ''
        }
    }


    SetInputValue = (e) => {
        this.setState({
            ClearValue: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        this.setState({
            inputList: [...this.state.inputList, this.state.ClearValue],
            ClearValue: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label> List : </label>
                <input type='text' name='toDoList' onChange={this.SetInputValue} value={this.state.ClearValue} />
                <button type='submit'>Add</button>
                <ul>
                    {this.state.inputList.map((m, i) => {
                        return <li key={i}> {m} </li>
                    })}
                </ul>
            </form>
        );

    }
}

export default ToDoList;