import React from 'react';
import {connect} from "react-redux";
import {removeTodo, toggleCompleteStatus} from "./actionCreators/actionCreaters";


function Todo(props) {
    
    
    const {content, id, checked, handleNotification} = props;
    let itemClass= "todo-item";
    if(checked){
        itemClass += " checked";
    }
    return (
        <div className={itemClass} onClick={() => {props.toggleCompleteStatus(id);}}>
            {content}
            <span
                className="remove-todo"
                onClick={(e) => {e.stopPropagation();
                                props.removeTodo(id);
                                handleNotification();
                                }}>X</span> 
        </div>
    );
}




const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => {dispatch(removeTodo(id))},
    toggleCompleteStatus: (id) => {dispatch(toggleCompleteStatus(id))}
});



export default connect(null, mapDispatchToProps)(Todo);









