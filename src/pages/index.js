import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

const index = () => {
    return (
        <>
            <Layout>
                <SEO title="Hi! It's Somoy" />

                <Home></Home>
                <About></About>
                <Contact></Contact>
            </Layout>
        </>
    );
};

export default index;
