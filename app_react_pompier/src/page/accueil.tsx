import * as React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import Produit from '../component/produit';

export default function mainPage() {
    return (
        <>
            <Header/>
            <Produit/>
            <Footer/>
        </>
    );
}
