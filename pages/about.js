import React, { memo } from 'react'
import AppLayout from '../components/app-layout'

export default memo(function About() {
  return (
    <div>
      <h2>about</h2>
      <style>{`
        h2 {
          color: red;
        }
      `}
      </style>
    </div>
  )
})
