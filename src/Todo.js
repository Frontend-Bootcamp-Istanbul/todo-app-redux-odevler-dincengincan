import React from 'react';
import {connect} from "react-redux";
import {removeTodo, toggleCompleteStatus} from "./actionCreators/actionCreaters";
import styled from 'styled-components';




const RemoveTodo = styled.span`
    background-color: #76030B;
    font-weight: bold;
    display: inline-block;
    margin-left: 10px;
    padding: 5px;
    color: #fff;
    border-radius: 5px;
`;




function Todo(props) {
    const {content, id, checked, handleNotification} = props;
    
    const TodoDiv = styled.div`
    cursor: pointer;
    margin-bottom: 10px;
    text-decoration: ${checked ? "line-through" : "none"}
`;   
    
    return (
        <TodoDiv onClick={() => {props.toggleCompleteStatus(id);}}>
            {content}
            <RemoveTodo
                onClick={(e) => {e.stopPropagation();
                                props.removeTodo(id);
                                handleNotification();
                                }}>X</RemoveTodo> 
        </TodoDiv>
    );
}




const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => {dispatch(removeTodo(id))},
    toggleCompleteStatus: (id) => {dispatch(toggleCompleteStatus(id))}
});



export default connect(null, mapDispatchToProps)(Todo);









