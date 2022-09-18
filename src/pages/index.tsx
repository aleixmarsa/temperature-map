import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import dynamic from 'next/dynamic'
const Map = dynamic(()=> import("../common/components/Map"),{ ssr: false})


const Home: NextPage = () => {
  return (
    <Map/>
  )
}

export default Home
