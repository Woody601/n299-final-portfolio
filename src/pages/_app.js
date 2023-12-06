import React from 'react'
import 'semantic-ui-css/semantic.css'
import styles from '../styles/globals.css'
import "@/styles/styles.module.css"
import {Menu, Icon} from 'semantic-ui-react'
import Link from 'next/link'



export default function App({ Component, pageProps }) {
  return (
    <>
      <Menu fixed='true'>
      <Menu.Item name='home' as={Link} href='/' />
      <Menu.Item name='about' as={Link} href='/about' />
      <Menu.Item name='materials' as={Link} href='/materials' />
      <Menu.Item name='contact' as={Link} href='/contact' />
      <Menu.Menu position='right'>
      <Menu.Item name='sign in' as={Link} href='/signin' />
        <Menu.Item as={Link} href='/cart'>
        <Icon name='cart'/>
        Cart
        </Menu.Item>
      </Menu.Menu>
        
      </Menu>
      <Component {...pageProps} />
    </>
  )
}
