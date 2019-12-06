import React, {Component} from 'react';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import RemoveAll from "./RemoveAll";
import "./App.css";
import Filters from "./Filters";
import {connect} from "react-redux";
import { setTodos, addTodo} from "./actionCreators/actionCreaters";
import styled from 'styled-components';


const Container = styled.div`
    background-color: whitesmoke;
    border-radius: 3px;
    width: 850px;
    margin: 30px auto;
    border: 1px solid #ddd;
`;

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





class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
      console.log("GÜncel proplar", this.props);
    // Component oluştuktan sonra gerekli olan datayı localstoragedan geyiriyoruz.
    let localTodos = window.localStorage.getItem("todos");
    if(localTodos){
      localTodos  = JSON.parse(localTodos);
    }
    this.props.setTodos(localTodos || []);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      if(JSON.stringify(prevProps.todos) !== JSON.stringify(this.props.todos)){
          window.localStorage.setItem("todos", JSON.stringify(this.props.todos))
      }
  }

   

  filterTodos = (todos, filterType) => {
    if(filterType === "all"){
        return todos;
    }else if (filterType === "completed"){
        return todos.filter((todo) => todo.checked);
    }else{
        return todos.filter((todo) => !todo.checked);
    }
  }

  render(){
      console.log("App props", this.props);
    return (
        <Container>
            <AddTodoContainer>
                <H3>Todo App</H3>
                <AddTodo   />
                <RemoveAll />
                <Filters />
            </AddTodoContainer>
            <TodoList todos={this.filterTodos(this.props.todos, this.props.activeFilter)} />
        </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  activeFilter: state.activeFilter,
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    setTodos: (todos) => {dispatch(setTodos(todos))},
    
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// NOT: Hocam buradaki soruları cevaplamanıza gerek yok. Bu notları kendime hatırlatma amacıyla oluşturuyorum. Derste gerekirse ben size iletirim. Bilginiz olsun. 


//Neden burada state'leri de gönderiyorum mapStateToProps olarak ??