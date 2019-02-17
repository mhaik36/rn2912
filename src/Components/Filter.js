import React, { Component } from 'react'
import { View, Picker} from 'react-native';
import {connect} from 'react-redux';
import * as actionCreators from './redux/actionCreators';
export  class Filter extends Component {
  render() {
    const { filterMode } = this.props;
    return (
      <View >
        <Picker selectedValue = {filterMode} 
                onValueChange = {value => this.props.setFilterMode(value)}>
               <Picker.Item label = "Show All" value = "Show_All" />
               <Picker.Item label = "Show Memoried" value = "Show_Memorized" />
               <Picker.Item label = "Show Forgot" value = "Show_Forgot" />
            </Picker>
      </View>
    )
  }
}
const mapStateToProps = function(state){
    return {filterMode : state.filterMode}
}
export default connect(mapStateToProps,actionCreators)(Filter);