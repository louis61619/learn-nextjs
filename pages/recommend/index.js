import React, { memo } from 'react'

import { useRouter } from 'next/router'

export default memo(function Recommend() {
  const router = useRouter()
  return (
    <div>
      <h2>Recommend id={router.query.id}</h2>
    </div>
  )
})
