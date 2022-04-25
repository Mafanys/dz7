import React from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import SubmitForm from "./components/SubmitForm/SubmitForm";
import './TODO.css';


class Todo extends React.Component{

    constructor(props){
        super(props);
        this.handelAdd = this.handelAdd.bind(this);
        this.handelDel = this.handelDel.bind(this);
    }

    state = {
        list: [],
        value: ''
    }

    handelAdd(todo){
        this.setState({
            list: this.state.list.concat(todo) 
        })
    }
    handelDel(id){
        this.setState({
            list: this.state.list.filter(item => item.id !== id) 
        })
    }
render(){
    return(
        <div className="toDo">
            <Header count = {this.state.list.length} />
            <SubmitForm handelAdd={this.handelAdd} />
            <List list = {this.state.list} onDelete={this.handelDel} />            
        </div>
        
    )
}

}

export default Todo;