import Header from "./Header";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import navButtons from "../config/buttons";

import styles from "../styles/Layout.module.scss";

const Layout = props =>{
    const appTitle = `sincerelykui`;
    return(
        <div className={styles.Layout}>
            <Head>
            <title>sincerelykui</title>
	  <meta name="viewport" content="width=device-width, initial-scale=1"/>

            </Head>
         
         <NavBar/>

        <Header appTitle={appTitle}/>
        <div className={styles.Content}>{props.children}</div>
        
        <Footer footer={props.children}/>
        </div>

    );

};

export default Layout;