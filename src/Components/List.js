import React, { Component } from 'react';
import {ScrollView, View} from 'react-native';
import Word from './Word';
import Filter from './Filter';
import Form from './Form'
import {connect} from 'react-redux';
import * as actionCreators from './redux/actionCreators';

export  class List extends Component {
  componentWillMount(){
     this.props.getAllWords();
  }
  render() {
    const { words, filterMode } = this.props;
    return (
      // <View>
      //   {/* {words.map(word => 
      //     <Word 
      //       key={word._id} 
      //       word={word}/>)} */}
      //        <Word />
      // </View>
        
        <View style={{flex: 1, justifyContent: 'center',}}>
          <Form/>
          <Filter/>
          <ScrollView>
            {words.filter(w => {
            if(filterMode === 'Show_Forgot' && w.isMemorized) return false;
            if(filterMode === 'Show_Memorized' && !w.isMemorized) return false;
            return true;
            }).map(word => 
              
                <Word 
                key={word._id} 
                word={word}/>
              )}
          </ScrollView>
        </View>
    )
  }
}

const mapStateToProps = function(state){
  return {words : state.words, filterMode : state.filterMode }
}

export default connect(mapStateToProps,actionCreators)(List);