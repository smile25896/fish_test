import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData } from 'actions/data';

class DataContainer extends Component {
  componentDidMount() {
    this.props.getData();
  }

  componentWillUnmount() {}

  render() {
    console.log(this.props.data)
    let dataItems = this.props.data.data.map(item=>(
      <div>
        No.{item.no} {item.company}
      </div>
    ))
    return (
      <div>
        {dataItems}
      </div>
    );
  }
}

DataContainer.propTypes = {
  data: PropTypes.object.isRequired,
  getData: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: bindActionCreators(getData, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);