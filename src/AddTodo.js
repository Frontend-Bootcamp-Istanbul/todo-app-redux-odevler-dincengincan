import React from 'react';
import {connect} from "react-redux";
import {addTodo, showNotif, hideNotif} from "./actionCreators/actionCreaters";


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
        event.preventDefault();
        this.props.addTodo({
            content: this.state.inputVal,
            id: Math.random(),
            checked: false
        });
        this.setState({
            inputVal: ""
        });
        this.props.showNotif("add"); // burada state'i anında değiştirip 1 saniye sonra eski haline getirmem gerekiyor. Fakat alt alta böyle işlem yaparken state'in güncellendiğinden nasıl emin olabilir. Async değil mi??
        setTimeout((this.props.hideNotif), 1000);
        
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
                 <input
                     type="text"
                     value={this.state.inputVal}
                     onChange={this.changeInput} />
                 <button>Ekle</button>


             </form>
        {
            add && <h4>{addedMessage}</h4> || remove && <h4>{deletedMessage}</h4> 
        }
        
        </div>
        
        )
    }
}

const mapStateToProps = (state) => ({
    notification: state.notification,
    addRemove: state.addRemove
    
  });


const mapDispatchToProps = dispatch => ({
    addTodo: (todo) => {dispatch(addTodo(todo))},
    showNotif: (addRemove) => {dispatch(showNotif(addRemove))},
    hideNotif: () => {dispatch(hideNotif())},

  });
  
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
