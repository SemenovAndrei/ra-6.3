import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FormWrapper = styled.form`
  width: 100%;
  position: relative;
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1.2rem;
  resize: none;
  border-style: none;
  outline: none;
`

const Button = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 60px;
  padding: 10px;
  border-style: none;
  border-radius: 10px;
  cursor: pointer;
`

function Form(props) {
  const onChange = (event) => {
    props.onChange(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    props.onSubmit()
  }

  return (
    <FormWrapper onSubmit={onSubmit}>
      <TextArea
        cols="5"
        rows="5"
        placeholder="Enter your message"
        value={props.messageValue}
        onChange={onChange}
      ></TextArea>
      {props.messageValue && <Button>Send</Button>}
    </FormWrapper>
  )
}

Form.propTypes = {
  messageValue: PropTypes.string.isRequired,
}

export default Form
