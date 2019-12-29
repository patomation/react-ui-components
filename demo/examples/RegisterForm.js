import React from 'react'
import { RegisterForm, Code, Gutter } from '../../src'

const RegisterFormExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <RegisterForm />
      `}/>

      <h2>Demo</h2><Gutter/>

      <RegisterForm />

    </div>
  )
}

export default RegisterFormExample