import Head from 'next/head'
import styles from '../styles/MentalHealth.module.scss'
import  Layout  from '../components/Layout';
import Date from '../components/date';
import Avatar from '../components/avatar';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BlockContent from '@sanity/block-content-to-react';
import { createClient } from "next-sanity";
import Router from 'next/router';

const Lifestyle =({Lifestyle, intro_post}) =>(

  <Layout>
        <Head>
      <title>sincerely kui</title>
        <meta name="description" content="Stories of someone with too much time to spend" />
        <meta name="robots" content="index, follow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="canonical" href="https://www.sincerelykui.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@sincerelykui" />
        <meta name="twitter:title" content="sincerelykui" />
        <meta name="twitter:description" content="stories of someone with too much time to spend" />
        <meta name="twitter:image" content="https://unsplash.com/photos/0drW3CxGkfw" />
                  </Head>
  
      <div className={styles.container}>
      <div className={styles.module_header}>
        <div className={styles.logo}>
        <img src="/logo.png" alt="logo" />
        </div>
        </div>
        <div className={styles.main}>
          <h3 className={styles.intro_title_main}>LIFESTYLE</h3>
          <div className={styles.intro_wrapper}>
          {intro_post.length ? intro_post.map((p, index) => (
              <div  className={styles.section_post}>
                <div className={styles.mainImage_intro} ><img src={urlFor(p.mainImage)} alt="no image" /></div>     
               <div className={styles.float_title}>
               <div className={styles.intro_post_title}>{p.title}</div>
                <div onClick={() => Router.push(`/post/${p.slug}`)} key={index} className={styles.click_more_intro}>Read more</div>
               </div>
                
              </div>
            )) : <div className={styles.noPost}></div>}
          </div>
  
          <div className={styles.feed}>
            {Lifestyle.length ? Lifestyle.map((p, index) => (
              <div onClick={() => Router.push(`/post/${p.slug}`)} key={index} className={styles.post}>
                <div className={styles.mainImage} ><img src={urlFor(p.mainImage)} alt="no image" /></div>
                <div className={styles.avatar_date}>
                {/*<Avatar name={p.authorName} picture={p.authorImage}/>*/}
                <Date dateString={p.publishedAt}/>
                </div>
  
                <h3 className={styles.post_title}>{p.title}</h3>
                <div className={styles.box}>
                  <input type="checkbox" className={styles.expanded} />
                <div className={styles.blocks}><BlockContent blocks={p.body} /></div>
                <label htmlFor="expanded"
                role="button">read more ...</label>
                </div>
              </div>
            )) : <div className={styles.noPost}></div>}
          </div>
        </div>
      </div>
      </Layout>
  
  );
  export default Lifestyle;
  
  const client = createClient({
    projectId: "ogthfjsu",
    dataset: "production",
    apiVersion: "2021-10-14",
    useCdn: false
  });
  
  
  
    const builder = imageUrlBuilder(client);
  
    function urlFor(source) {
        return builder.image(source);
    }
  
  
  export async function getStaticProps() {
    const intro_post = await client.fetch(`*["lifestyle" in categories[]->title][0...1]| order( publishedAt desc){_id,"slug": slug.current,title,body,mainImage,publishedAt,"authorImage":author->image,"authorName":author->name}`);
    const Lifestyle = await client.fetch(`*["lifestyle" in categories[]->title][1..-1]| order( publishedAt desc){_id,"slug": slug.current,title,body,mainImage,publishedAt,"authorImage":author->image,"authorName":author->name}`);
    return {
        
      props: {
        Lifestyle,
        intro_post
        
      },
      //nextjs will try to re-generate the page
      revalidate:10, //in seconds
    };
  }