import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useEffect } from 'react'
import styles from '../../styles/Home.module.css'
const Home: NextPage = () => {
  const fetchCititesCoords = async () => {
    const baseURL = window.location.href
    const cititesCoords = await axios.get(`${baseURL}api/cities`)
    console.log("🚀 ~ file: index.tsx ~ line 11 ~ useEffect ~ cititesCoords", cititesCoords)
  }
  useEffect(() => {
    fetchCititesCoords()
  },[])

  return (
    <div className={styles.container}>
     
    </div>
  )
}

export default Home
