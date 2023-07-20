import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Featured from '../../components/featured/Featured'
import PropertyList from "../../components/propertylist/PropertyList"
import "./home.css"
import FeaturedProperty from '../../components/featuredproperty/FeaturedProperty'
import MailList from "../../components/mailList/MailList"
import Footer from '../../components/footer/Footer'
 const Home = ()=>{
return(
    <div>
        <Navbar/>
        <Header/> 
        <div className="homeContainer">
            <Featured/>
            <h1 className="homeTitle">Browse by property Type</h1>
            <PropertyList/>
            <h1 className="homeTitle">Home guests Love</h1>
            <FeaturedProperty/>
            <MailList/>
            <Footer/>
        </div>
    </div>
)
 } 
 export default Home;