import axios from 'axios';
const URL = "https://server2912me.herokuapp.com/word/";
export function toggleForm(){
    return {type : 'TOGGLE_FORM'}
}
export function setFilterMode(filterMode){
    return { type : 'SET_FILTER_MODE' , filterMode}
}


export function getAllWords(){
    return function(dispatch){
        axios.get(URL)
        .then(response => dispatch({type : 'SET_WORDS' , words : response.data.words}));
    }
}
export function removeWord(_id){
    return function(dispatch){
        axios.delete(URL + _id)
        .then(() => dispatch({type : 'REMOVE_WORD' , _id}));
    }
}
export function addWord(en , vn){
    return function(dispatch){
        axios.post(URL , { en,vn })
        .then(res => {
            const { success , word , message} = res.data;
            if(!success) return alert(message);
            dispatch({type : 'ADD_WORD' , word});           
        });
        
    }
}
export function toggleWord(_id , isMemorized){
    console.log('toggleWord')
    return function(dispatch){
        axios.put(URL + _id, {isMemorized})
        .then(res => dispatch({type : 'TOGGLE_WORD' , _id}));
    }
}