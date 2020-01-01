import React from 'react'
import { Select, Code, Heading } from '../../src'

const SelectExample = () => {
  return (
    <div>
      <Heading Tag='h2'>Example</Heading>
      <Code block={`
        <Select />
      `}/>

      <Heading Tag='h2'>Demo</Heading>

      <Select
        // options={}
      />

    </div>
  )
}

export default SelectExample
