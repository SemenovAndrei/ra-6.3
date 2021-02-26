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
  width: 40%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(81, 255, 0, 0.555);
`
const OtherMessage = styled(MyMessage)`
  align-self: flex-start;
  background-color: rgba(53, 211, 177, 0.281);
`

function ListOfMessages(props) {
  console.log(props)
  const messages = props.messages.map((message) => {
    if (message.userId === process.env.REACT_APP_USER_ID) {
      return (
        <MyMessage id={message.id} key={message.id}>
          {message.content}
        </MyMessage>
      )
    }
    return (
      <OtherMessage id={message.id} key={message.id}>
        {message.content}
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
