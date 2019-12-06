import React from 'react';
import {connect} from "react-redux";
import {removeAll} from "./actionCreators/actionCreaters";
import styled from 'styled-components';

const ButtonRemoveAll = styled.button`
    width: 90%;
    margin: 0 auto;
    display: block;
    margin-top: 15px;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #ccc;
    background: #7d3232;
    color: #fff;
    cursor: pointer;
    font-size: 1em;
    &:hover {
        background-color: black;
        color: white;
`;




class RemoveAll extends React.Component {
    render() {
        return <ButtonRemoveAll onClick={() => {this.props.removeAll()}}>
                Reset
        </ButtonRemoveAll>
    }
}

const mapDispatchToProps = dispatch => ({
    removeAll: () => {dispatch(removeAll())}
  });

export default connect(null, mapDispatchToProps)(RemoveAll);



