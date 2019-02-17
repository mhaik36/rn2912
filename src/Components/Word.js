import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Button} from 'react-native';
import {connect} from 'react-redux';
import * as actionCreators from './redux/actionCreators';

export class Word extends Component {
  render() {
    const {word } = this.props;
    return (
        <View style={{flexDirection: 'row', flex: 1, "width": "100%"}}>
            <View style={{flexDirection: 'column',flex: 1}}>
                <View style={{  alignItems: 'center'}}>
                    <Text style={{  alignItems: 'center', 
                                fontSize: 20, fontWeight: 'bold',
                                color :'#28a745'}} >{word.en}</Text>
                </View>
                {/* <TouchableHighlight 
                        style ={{
                            // height: 10,
                            // width:160,
                            borderRadius:10,
                            backgroundColor : word.isMemorized ? '#28a745' : 'red',
                            marginLeft :10,
                            
                            // marginRight:10,
                            // marginTop :10,
                           // flex: 1
                        }}>
                    <Button    
                        onPress={() => this.props.toggleWord(word._id , !word.isMemorized)}
                        title={word.isMemorized ? 'Forgot' : 'Memorized'}
                        color="#FFFFFF"
                        accessibilityLabel="Learn more about this button"
                    /> 

                </TouchableHighlight>  */}
                    <TouchableOpacity style={{
                        borderRadius:10,
                        backgroundColor : word.isMemorized ? '#28a745' : '#dc3545',
                        paddingVertical: 15,
                        marginLeft :10,
                        marginRight: 10
                        }} 
                        onPress={() => this.props.toggleWord(word._id , !word.isMemorized)}
                        >
                        <Text  style={styles.buttonText}>{word.isMemorized ? 'Forgot' : 'Memorized'}</Text>
                    </TouchableOpacity> 
            </View>
            <View style={{flexDirection: 'column',flex: 1, }}>
                <View style={{  alignItems: 'center'}}>
                    <Text style={{  alignItems: 'center', 
                            fontSize: 20, fontWeight: 'bold',
                             color :'#eb144c'}} >{word.isMemorized ? '----' : word.vn}</Text>
                </View>
                {/* <TouchableHighlight 
                        style ={{
                            height: 40,
                            borderRadius:10,
                            backgroundColor : '#ffc107',
                            marginLeft :10,
                            marginRight:10,
                            // marginTop :10,
                        }}>
                    <Button         
                        title="Remove"
                        accessibilityLabel="Learn more about this button"
                        onPress={() => this.props.removeWord(word._id)}
                    /> 
                </TouchableHighlight>  */}
                <TouchableOpacity style={{
                        borderRadius:10,
                        backgroundColor : '#ffc107',
                        paddingVertical: 15,
                        marginLeft :10,
                        marginRight: 10
                        }} 
                        onPress={() => this.props.removeWord(word._id)}
                        >
                        <Text  style={styles.buttonText}>Remove</Text>
                    </TouchableOpacity> 
            </View>
        </View>
    )
  }
}
const styles = StyleSheet.create({
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    }, 
   
  });

export default connect(null,actionCreators)(Word);