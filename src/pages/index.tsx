import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import dynamic from 'next/dynamic'
const Map = dynamic(()=> import("../common/components/Map"),{ ssr: false})
import {getCities} from './api/cities'
interface City {
  id: number;
  name: string;
  coords: [number, number];
}

interface Props {
  cities: City[],
  nextPage:NextPage;
}

const Home = ({cities, nextPage}:Props) => {
  return (
    <Map cities={cities}/>
  )
}

export default Home

export async function getServerSideProps() {
  const baseURL = 'localhost:/3000/';
  const cities = await getCities()
  return {
    props:{
      cities
    }
  }
}
