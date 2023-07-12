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
    
<link rel="preload" href="https://cdn.shareaholic.net/assets/pub/shareaholic.js" as="script" />
<meta name="shareaholic:site_id" content="9f73a847a153623e7f0b09b7c585bd88" />
<script data-cfasync="false" async src="https://cdn.shareaholic.net/assets/pub/shareaholic.js"></script>

            </Head>
            <Header appTitle={appTitle}/>
         <NavBar/>
        
        <div className={styles.Content}>{props.children}</div>
        
        <Footer footer={props.children}/>
        </div>

    );

};

export default Layout;