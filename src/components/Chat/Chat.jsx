import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Form from '../Form/Form'
import ListOfMessages from '../ListOfMessages/ListOfMessages'

const ChatWrapper = styled.div`
  width: 700px;
  border: 2px solid #892dd4;
  border-radius: 10px;
`
const Separator = styled.div`
  border-top: 2px solid #892dd4;
`

export default function Chat() {
  const [messageValue, setMessageValue] = useState({
    empty: '',
  })

  const [listOfMessages, setListOfMessages] = useState({
    messages: [],
    latestID: 0,
  })

  const handleMessage = (value) => {
    setMessageValue((prev) => ({
      ...prev,
      message: value,
    }))
  }

  const onSubmit = () => {
    if (messageValue.message.trim()) {
      sendMessage()
    }
    setMessageValue({
      empty: '',
    })
  }

  async function sendMessage() {
    // const response = await fetch(process.env.REACT_APP_MESSAGE_URL, {
    const response = await fetch(process.env.REACT_APP_MESSAGE_URL_HEROKU, {
      method: 'POST',
      body: JSON.stringify({
        content: messageValue.message,
        userId: process.env.REACT_APP_USER_ID,
      }),
    })
    if (response.status === 204) {
      // loadMessages()
    }
  }

  useEffect(() => {
    async function loadMessages() {
      const response = await fetch(
        // `${process.env.REACT_APP_MESSAGE_URL}?from=${listOfMessages.latestID}`,
        `${process.env.REACT_APP_MESSAGE_URL_HEROKU}?from=${listOfMessages.latestID}`,
        {
          method: 'GET',
        }
      )
      const json = await response.json()

      if (json.length) {
        const prevMessage = listOfMessages.messages
        setListOfMessages(() => ({
          messages: [...prevMessage, ...json],
          latestID: json[json.length - 1].id,
        }))
      }
    }

    const timeout = setInterval(() => loadMessages(), 1000)
    return () => {
      clearInterval(timeout)
    }
  }, [listOfMessages])

  return (
    <ChatWrapper>
      <ListOfMessages {...listOfMessages} />
      <Separator>
        <Form
          messageValue={messageValue.message || messageValue.empty}
          onChange={handleMessage}
          onSubmit={onSubmit}
        />
      </Separator>
    </ChatWrapper>
  )
}
