import React from "react";
import Head from 'next/head'
import { Grid, Message} from 'semantic-ui-react';
import ProductItem from "@/components/ProductItem";
export default function Materials() {
  return (
    <>
       <Head>
        <title>Materials</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero">
        <h1>INDY LASER DESIGNS</h1>
      </section>
      <Grid centered>
        <Grid.Row columns={1}>
          <h2>Our Available Materials</h2>
        </Grid.Row>
        <Grid.Row columns={1}>
          <p>Here is a list of our available materials we can engrave on. Please look through the pages to look at what is available and what kinds of products we have made.</p>
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