import React, {Component} from 'react';
import {connect} from "react-redux";
import {setFilter} from "./actionCreators/actionCreaters";
import styled from 'styled-components';


const FilterDiv = styled.div`
    margin-top: 15px;
    padding-left: 10px;
    cursor: pointer;
    width: 50%;
    border-radius: 20px;
    &:hover {
        background-color: #7d3232;
        color: white;
        font-weight: bold;
    


`;



const options = [
    {label: "All", labelKey: "all"},
    {label: "Completed", labelKey: "completed"},
    {label: "Uncompleted", labelKey: "uncompleted"}
];

class Filters extends Component {
    render() {
        console.log(this.props);
        return <div>
            {
                options.map((option) => {
                    return <FilterDiv onClick={() => {
                        this.props.changeFilter(option.labelKey);
                    }}>
                        {option.label}
                    </FilterDiv>
                })
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        activeFilter: state.activeFilter
    }
};

const mapDispatchToProps = dispatch => ({
  changeFilter: (newFilter) => {dispatch(setFilter(newFilter))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);


//Burada neden activeFilter'ı state olarak gösterdik?? Sadece changeFilter'ı göstersek yetmiyor mu?