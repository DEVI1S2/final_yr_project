import { UPDATE_MESSAGE, UPDATE_USER_MESSAGE } from "../actions/chatbotActions";

const initialState ={
     messages : []
}

const chatbotReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UPDATE_MESSAGE:
            // console.log("reply",action.data.response)
            let message = {
                speak: "bot",
                text: action.data.response,
                intent: action.data.intent_name,
                item: action.data.parameter
            }
            return {
                ...state, messages : [...state.messages, message]
            };
        case UPDATE_USER_MESSAGE:
            // console.log("inreducer",action.data)
            let messageUser = {
                speak: "user",
                text: action.data.text
            }
            return {
                ...state, messages : [...state.messages, messageUser]
            };
        default:
            return state;
    }
}

export default chatbotReducer