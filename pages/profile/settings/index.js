import React, { memo } from 'react'
import ProfileLayout from '../layout/index'

import {
  InfoWrapper
} from './style'

export default memo(function Settings() {
  return (
    <ProfileLayout>
      <InfoWrapper>
        <h2>用戶設定</h2>
      </InfoWrapper>
    </ProfileLayout>
  )
})
