import React from 'react';
import {connect} from "react-redux";
import {addTodo} from "./actionCreators/actionCreaters";


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
        this.props.addTodo(this.state.inputVal);
        this.setState({
            inputVal: ""
        });
    }

    render() {
        const {onAdd} = this.props;
        return <form
            onSubmit={this.addTodo}>
            <input
                type="text"
                value={this.state.inputVal}
                onChange={this.changeInput} />
            <button>Ekle</button>
        </form>
    }
}


const mapDispatchToProps = dispatch => ({
    addTodo: (todo) => {dispatch(addTodo({
        content: todo,
        id: Math.random(),
        checked: false

    }))}
  });
  
export default connect(null, mapDispatchToProps)(AddTodo);
