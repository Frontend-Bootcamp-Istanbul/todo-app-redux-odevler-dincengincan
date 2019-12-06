import React from 'react';
import {connect} from "react-redux";
import {addTodo, showNotif, hideNotif} from "./actionCreators/actionCreaters";
import styled from 'styled-components';


const ButtonAdd = styled.button`
    border: 1px solid #ccc;
    margin-left: 15px;
    padding: 5px 15px;
    font-size: 1em;
    cursor: pointer;
    border-radius: 20px;
    &:hover {
        background-color: black;
        color: white;
`;

const Input = styled.input`
    border: 1px solid #ccc;
    padding: 7px 5px;
    width: 150px;
    font-size: 14px; 
    border-radius: 20px;  
`;
// Notification panelinde color kısmını color: ${add ? blue : red} yapmak için ne yapmalıyım veya add yerine props kullanırsam içeri mi almak lazım illa?
 const Notification = styled.div` 
    color: #7d3232;
    font-size: 16px;   
`;



class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputVal: ""
        };
        this.changeInput = this.changeInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    changeInput(e){
        const newVal = e.target.value;
        this.setState({
            inputVal: newVal
        });
    }

    addTodo(event){
        const newTodo = this.state.inputVal
        const hasItem = this.props.todos.some(item => {
            return item.content === newTodo;
          })
        if(hasItem){
            alert("You already have this note.")
            return false;
       }else if(newTodo.length < 2){
           alert("Type at least 2 digits!")
           return false;
       }else{
        event.preventDefault();
        this.props.addTodo({
            content: this.state.inputVal,
            id: Math.random(),
            checked: false
        });
       }
        
        this.setState({
            inputVal: ""
        });
        this.props.showNotif("add"); // burada state'i anında değiştirip 1 saniye sonra eski haline getirmem gerekiyor. Fakat alt alta böyle işlem yaparken state'in güncellendiğinden nasıl emin olabilir. Async değil mi??
        setTimeout((this.props.hideNotif), 2000);
        
    }
        
    

    render() {
        const show = this.props.notification;
        const addedMessage = "Note has been added!"
        const deletedMessage = "Note has been deleted!"
        let type = this.props.addRemove
        let add;
        let remove;
        if(show && type === "add" ){
            add = true;
        }
        if(show && type === "remove"){
            remove = true;
        }
        
        return (
        <div>
             <form
                 onSubmit={this.addTodo}>
                 <Input
                     type="text"
                     value={this.state.inputVal}
                     onChange={this.changeInput} />
                 <ButtonAdd>Add</ButtonAdd>


             </form>
             <Notification>
                {
                    add && <h4 style={{color:"#346"}}>{addedMessage}</h4> || remove && <h4>{deletedMessage}</h4> 
                }
            </Notification>
        </div>
        
        )
    }
}

const mapStateToProps = (state) => ({
    notification: state.notification,
    addRemove: state.addRemove,
    todos: state.todos
    
  });


const mapDispatchToProps = dispatch => ({
    addTodo: (todo) => {dispatch(addTodo(todo))},
    showNotif: (addRemove) => {dispatch(showNotif(addRemove))},
    hideNotif: () => {dispatch(hideNotif())},

  });
  
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
