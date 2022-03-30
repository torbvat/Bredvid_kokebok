import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


 const message3 = () => {
   return(
  <p>tekst3</p>
   )
 }

function message(){
  return(
    <p>Tekst</p>
  )
}
let message2 = <p>tekst2</p>

export default function Home() {
  return(
    <div>
      <h1>Overskrift</h1>
      <h2>Underoverskrift</h2>
      <h3>Under-underoverskrift</h3>
      <h4>Under-under-underoverskrift</h4>
      {message()}
      {message2}
      {message3()}
    </div>
  )
}
