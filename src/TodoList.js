import React from 'react';
import Todo from './Todo';
import {connect} from "react-redux";
import { showNotif, hideNotif} from "./actionCreators/actionCreaters";
import styled from 'styled-components';

const AddTodoContainer = styled.div`
    display: inline-block ;
    width: 30%;
    padding:10px;
    vertical-align: top;
`;

const H3 = styled.h3`
    background: #346;
    text-align: center;
    color: #fff;
    padding: 10px 15px;
    border-radius: 0 0 2px 2px;
    margin:0;
    margin-bottom: 20px;
`;

class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    handleNotification = () => {
        this.props.showNotif("remove"); 
        setTimeout((this.props.hideNotif), 2000);
    }
    

    render(){
        return (
            <AddTodoContainer>
                <H3>Total Todo= <span>{this.props.todos.length}</span>
                </H3>
                {
                    this.props.todos.map((todo) => {
                        return <Todo
                            {...todo}
                            key={todo.id}
                            handleNotification = {this.handleNotification}
                        />
                    })
                }

                
            </AddTodoContainer>
        );
    }
}




const mapDispatchToProps = dispatch => ({
    showNotif: (addRemove) => {dispatch(showNotif(addRemove))},
    hideNotif: () => {dispatch(hideNotif())},

  });


  export default connect(null, mapDispatchToProps)(TodoList);
