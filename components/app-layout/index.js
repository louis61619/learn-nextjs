import React, { memo } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default memo(function AppLayout(props) {
  return (
    <div>
      <header>
        <h2>header</h2>
        {/* 服務端渲染跳專 */}
        <a href="/about">關於一</a>
        {/* 前端渲染 */}
        <Link href="/about">
          <button>關於二</button>
        </Link>
        <Link href="/profile">
          <a>個人信息</a>
        </Link>
        <hr />
      </header>
      {props.children}
      <footer>
        <hr />
        <h2>footer</h2>
      </footer>
    </div>
  )
})
