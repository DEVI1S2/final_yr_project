import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Messages = () => {

    const messages = useSelector(state => state.chatbot.messages)
    // console.log("messages", messages);

    const item_display = (message)=>{
        let df_intent = message.intent
        localStorage.setItem("item",message.item)
        if(df_intent== "product_search"){
            return <button type='submit' class="prod_btn">
                <Link to="/products">{message.item}</Link>
            </button>
        }
    }

    const displayMessage = (message, index)=>{
        if(message.speak == "user"){
            return  <div key={index} class ="messages_user">
                        <div class ="messages_text_user">{message.text}</div>
                    </div>
        }
        else if (message.speak == "bot"){
            return <div>
                <div key={index} class="messages_df">
                        <div class="messages_text_df">{message.text}</div>
                    </div>
                    <div>{item_display(message)}</div>
            </div>
             
        }
        
    }

    return(
        <div class="messages"> 
            {
                messages.map((message, index)=> {
                return displayMessage(message, index)
            })}
        </div>
    )
}

export default Messages