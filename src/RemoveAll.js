import React from 'react';
import {connect} from "react-redux";
import {removeAll} from "./actionCreators/actionCreaters";


class RemoveAll extends React.Component {
    render() {
        return <button className="remove-all" onClick={() => {this.props.removeAll()}}>
                Tümünü Sil
        </button>
    }
}

const mapDispatchToProps = dispatch => ({
    removeAll: () => {dispatch(removeAll())}
  });

export default connect(null, mapDispatchToProps)(RemoveAll);



