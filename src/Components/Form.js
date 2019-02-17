import React, { Component } from 'react'
import {StyleSheet,TextInput, View, TouchableOpacity, Text, Alert} from 'react-native';
import {connect } from 'react-redux';
import * as actionCreators from './redux/actionCreators';
export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEn : '',
            txtVn : '',
        }
        this.addWord = this.addWord.bind(this);    
    }
   addWord(){
    const { txtEn , txtVn} = this.state;
    if(txtEn==='')
      Alert.alert('Please type in English');
    else if(txtVn ==='')
      Alert.alert('Please type in Vietnamese');
    else {
      this.props.addWord(txtEn , txtVn);
      this.setState({txtEn : '' , txtVn : ''})
    }

       
    }
  render() {
    const { shouldShowForm  } = this.props;
    return (
      <View>
       {shouldShowForm ? 
          <View style = {styles.container} >
              <TextInput style = {styles.input} 
                  onSubmitEditing={() => this.passwordInput.focus()} 
                  returnKeyType="next" 
                  placeholder='English' 
                  onChangeText={txtEn => this.setState({ txtEn })} 
                  value={this.state.txtEn}
                  />
              <TextInput style = {styles.input} 
                  onSubmitEditing={() => this.passwordInput.focus()} 
                  returnKeyType="next" 
                  placeholder='Vietnamese' 
                  onChangeText={txtVn => this.setState({ txtVn })} 
                  value={this.state.txtVn}
                  />
                  <View style = {{ flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.buttonContainer1} onPress={this.addWord}>
                        <Text  style={styles.buttonText}>Add word</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.buttonContainer2} onPress={this.props.toggleForm}>
                        <Text  style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity> 
                  </View>
          </View> :
           <View style = {{ flexDirection: 'row'}}>
           <TouchableOpacity style={styles.buttonContainer3} onPress={this.props.toggleForm}>
               <Text  style={styles.buttonText}>+</Text>
           </TouchableOpacity> 
         </View>
            }
      </View>
    )
  }
}

const mapStateToProps = function(state){
    return {shouldShowForm : state.shouldShowForm};
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#1cc772'
   },
  input:{
      height: 40,
      backgroundColor: '#FFFFFF',
      marginBottom: 10,
      padding: 10,
  },
  buttonContainer1:{
    flex: 1,
    backgroundColor: '#2980b6',
    paddingVertical: 15,
    marginRight: 10
  },
  buttonContainer2:{
    flex: 1,
    backgroundColor: '#dc3545',
    paddingVertical: 15
  },
  buttonContainer3:{
    flex: 1,
    backgroundColor: '#28a745',
    paddingVertical: 15,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700',
  }, 
 
});

export default connect(mapStateToProps , actionCreators)(Form);