import React from 'react'
import { Brand, Code, Gutter } from '../../src'

const BrandExample = () => {
  return (
    <div>
      <h2>Example</h2>
      <Code block={`
        <Brand />
      `}/>

      <h2>Demo</h2><Gutter/>

      <Brand />

    </div>
  )
}

export default BrandExample
