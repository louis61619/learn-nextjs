import React, { memo } from 'react'
import axios from 'axios'

import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'

import AppLayout from '../components/app-layout'
import styles from '../styles/Home.module.css'

const Home = function(props) {

  const { name, banners, recommends } = props

  console.log(banners)

  const recommendItemClick = (item) => {
    Router.push({
      pathname: '/recommend',
      query: {
        id: item
      }
    })
  }

  return (
    <div>
      <Head>
        <title>XXXX</title>
      </Head>
      <h2 className={styles.title}>Home首頁</h2>
      <h3>bnner</h3>
      {
        [1, 2, 3].map((item, index) => {
          return (
            // <Link key={item} href={`/recommend?id=${item}`}>
            //   <div>{`推薦數據${item}`}</div>
            // </Link>
            <div key={item} onClick={e => recommendItemClick(item)}>{`推薦數據${item}`}</div>
          )
        })
      }
      {/* ul>li{推薦數據$}*3 */}
      <div>
        <h2>{name}</h2>
        {
          banners.map(item => {
            return (
              <div key={item.title}>{item.title}</div>
            )
          })
        }
      </div>
    </div>
  )
}

Home.getInitialProps = async (props) => {
  const res = await axios({
    url: "http://123.207.32.32:8000/home/multidata"
  })
  // console.log(res)
  return {
    name: "Renny",
    banners: res.data.data.banner.list,
    // recommends: res.data.data.recommend.list
  }
}

export default Home