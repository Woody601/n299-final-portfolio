import React from "react";
import Head from 'next/head'
import { Grid, Message} from 'semantic-ui-react';
import ProductItem from "@/components/ProductItem";
import  "@/styles/Home.module.css"
export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero">
        <h1>INDY LASER DESIGNS</h1>
      </section>
      <Grid centered>
        <Grid.Row columns={1} verticalAlign="left">
        <Grid.Column width={8} verticalAlign="left"><Message>
    <Message.Header>Changes to the Site</Message.Header>
    <p>
    Welcome to our website! Our site is currently in development, and we will slowly be rolling out with the changes we would like to have implemented in place!
    </p>
  </Message></Grid.Column>
        
        </Grid.Row>
      </Grid>
      <Grid centered>
        <Grid.Row columns={1}>
          <h2>Our Available Materials</h2>
        </Grid.Row>
      </Grid>
      <div class="materials">
        <ProductItem src="/acrylic.jpg" material="acrylic" title="Acrylic"/>
        <ProductItem src="/leather.jpg" material="leather" title="Leather"/>
        <ProductItem src="/metal.jpg" material="metal" title="Metal"/>
        <ProductItem src="/wood.jpg" material="wood" title="Wood"/> 
      </div>
      
      
      
    </>
  )
}