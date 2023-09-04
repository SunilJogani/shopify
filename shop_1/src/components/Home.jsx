import React from 'react';
import Banner from './Banner';
import Blog from './Blog';
import Collection from './Collection';
import HotDeal from './HotDeal';
import Seller from './Seller';
import Header from './Header';

function Home() {
  return (
    <>
        <Header/>
        <Banner />
        <Collection />
        <Seller />
        <HotDeal />
        <Blog />
    </>
  )
}

export default Home;
