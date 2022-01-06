import React, { Component } from 'react';

class Todo extends React.Component {
    constructor(props){
        super(props);

        this.state={
            newItem:"",
            list: []
        }
    }

    updateInput(key, value){
        // update react state
        this.setState({
            [key]: value
        });
    }
    addItem(){
        // create item with a uniqu id
        const newItem={
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        }

        // copy of current list of items
        const list = [...this.state.list];

        // add new item to list
        list.push(newItem);

        // update state with a new list and reset new item Input
        this.setState({
            list,
            newItem: ""
        })
    }
    deleteItem(id){
        // copy of current list of items
        const list = [...this.state.list];

        // filter out item being deleted
        const updatedList = list.filter(item => item.id !== id);

        this.setState({list: updatedList});
    }

    render() { 
        return (
            <div className="todo-app">
                <div>
                    <h2 className="todo-title">Super Todo.</h2>
                    <br />
                    <div className="main">
                        <input type="text" className="todo-input" placeholder="Type your todos" 
                        value={this.state.newItem} onChange={e => this.updateInput("newItem", e.target.value)} />
                        <button className="todo-btn" onClick={() => this.addItem()}>Add</button>
                    </div>
                </div>
                <br />
                <ol className="todo-list">
                    {this.state.list.map(item => {
                        return(
                            <span className="todo-list-inner">
                                <li className="todo-list-item" key={item.id}>
                                {item.value}
                                </li>
                                <button className="todo-list-btn" onClick={() => this.deleteItem(item.id)}>
                                    delete
                                    </button>
                            </span>
                            
                        )
                    })}
                </ol>
            </div>
        );
    }
}
 
export default Todo;