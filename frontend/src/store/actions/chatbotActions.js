import Axios from "axios";

export const UPDATE_MESSAGE = "UPDATE_MESSAGE";
export const UPDATE_USER_MESSAGE = "UPDATE_USER_MESSAGE";

export const textQueryAction = (data) =>{
    return async dispatch => {
            dispatch({ type: UPDATE_USER_MESSAGE, data: data })
            const responses = await Axios.post("http://localhost:3002/chat_in",{
                            text:data.text,
                            userName: "athu123"
                            })
            console.log("response",responses.data.response)
            return dispatch({ type: UPDATE_MESSAGE, data: responses.data })
        
        
    }
}