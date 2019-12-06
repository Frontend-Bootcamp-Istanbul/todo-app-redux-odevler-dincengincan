import React from 'react';
import Todo from './Todo';
import {connect} from "react-redux";
import { showNotif, hideNotif} from "./actionCreators/actionCreaters";



class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    handleNotification = () => {
        this.props.showNotif("remove"); 
        setTimeout((this.props.hideNotif), 1000);
    }
    

    render(){
        return (
            <div className="todo-list">
                <h3>TodoList <span>{this.props.todos.length}</span>
                </h3>
                {
                    this.props.todos.map((todo) => {
                        return <Todo
                            {...todo}
                            key={todo.id}
                            handleNotification = {this.handleNotification}
                        />
                    })
                }

                
            </div>
        );
    }
}




const mapDispatchToProps = dispatch => ({
    showNotif: (addRemove) => {dispatch(showNotif(addRemove))},
    hideNotif: () => {dispatch(hideNotif())},

  });


  export default connect(null, mapDispatchToProps)(TodoList);
