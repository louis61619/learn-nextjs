import React, { memo } from 'react'
import ProfileLayout from '../layout/index'

import {
  InfoWrapper
} from './style'

export default memo(function ProfileInfo() {
  return (
    <ProfileLayout>
      <InfoWrapper>
        <h2>用戶基本訊息</h2>
      </InfoWrapper>
    </ProfileLayout>
  )
})
