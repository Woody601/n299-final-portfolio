import React from "react";
import Head from 'next/head'
import { Image } from 'semantic-ui-react';
import Gallery from "@/components/Gallery";
export default function Home() {
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    // Add more image URLs as needed
  ];
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section class="hero">
        <h1>INDY LASER DESIGNS</h1>
      </section>
      <div>
      <h1>Image Gallery</h1>
      <Gallery images={images} />
    </div>
    </>
  )
}