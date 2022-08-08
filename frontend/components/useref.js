


    import React, { useEffect, useRef } from 'react'
    const Messages = ({ messages }) => {

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages]);

    return (
       <div>
           {messages.map((messages,index)=>(
              <div key={messages.id}>{messages.text}</div>
          ))}

           <div ref={messagesEndRef} />
        </div>
    )
   }