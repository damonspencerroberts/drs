import React from "react";
import Header from "../../partials/header/navbar-content";
import Footer from "../../partials/footer/footer";
import HomeContent from "./home-contents";
import headCont from "../../../json/head-page-cards/home-content";

const Head = () => 
    <div>
        <Header />
            <HomeContent 
            title = {headCont.title} 
            intro = {headCont.intro} 
            />
        <Footer />
    </div>

export default Head;