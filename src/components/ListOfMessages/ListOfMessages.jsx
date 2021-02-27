import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ListWrapper = styled.div`
  width: 100%;
  height: 50vh;
  padding: 10px;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 0;
  }
`
const MyMessage = styled.div`
  position: relative;
  align-self: flex-end;
  width: 45%;
  padding-top: 5px;
  padding-bottom: 5px;

  & div {
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    white-space: pre-line;
    border-radius: 10px;
    background-color: rgba(81, 255, 0, 0.555);
  }
`
const OtherMessage = styled(MyMessage)`
  align-self: flex-start;

  & div {
    background-color: rgba(53, 211, 177, 0.281);
  }
`

function ListOfMessages(props) {
  const messages = props.messages.map((message) => {
    if (message.userId === props.userID) {
      return (
        <MyMessage id={message.id} key={message.id}>
          <div>{message.content}</div>
        </MyMessage>
      )
    }
    return (
      <OtherMessage id={message.id} key={message.id}>
        <div>{message.content}</div>
      </OtherMessage>
    )
  })

  useEffect(() => {
    if (messages.length) {
      const element = document.getElementById(`${props.latestID}`)
      element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
    }
  })

  return <ListWrapper id="list">{messages}</ListWrapper>
}

ListOfMessages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
}

export default ListOfMessages
