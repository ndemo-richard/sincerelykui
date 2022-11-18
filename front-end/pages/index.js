import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import Router from 'next/router';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import imageUrlBuilder from '@sanity/image-url';
import styles from '../styles/index.module.scss';
import Avatar from '../components/avatar';
import Layout from "../components/Layout";
import BlockContent from '@sanity/block-content-to-react';
import Date from '../components/date';
import { createClient } from "next-sanity";


const Index = ({ mentalHealth,lifestyle,foodRecipe,newPost })=>(

    <Layout>
    
    <div className={styles.wrapper}>
      <section className={styles.module_header}>
      <div className={styles.logo}>
      <img src="/logo.png" alt="logo" />
      </div>
      <div className={styles.hook}></div>
      </section>

      <section className={styles.module_promo}>
        <div className={styles.one}>
          <h1>Life is too short to be left to the people or things that make you unhappy</h1>
          <p>welcome to sincerely blog where we talk about mental health, lifestyle and not forgetting giving you tips on your favourite food recipe</p>
          <div className={styles.intro_more}>all recent posts &nbsp; ➔</div>
        </div>
        <div className={styles.intro_wrapper}>
        {newPost.length ? newPost.map((p,index) => (
            <div onClick={() => Router.push(`/post/${p.slug}`)} key={index} className={styles.post}>
              <img className={styles.mainImage_intro} src={urlFor(p.mainImage)} alt="no image" />
              <div className={styles.avatar_date}>
              <Avatar name={p.authorName} picture={urlFor(p.authorImage)}/>
              <Date dateString={p.publishedAt}/>
              </div>

              <h3 className={styles.post_title}>{p.title}</h3>
              <div className={styles.box}>
                <input type="checkbox" className={styles.expanded} />
              <div className={styles.blocks}><BlockContent blocks={p.body} /></div>
              <label htmlFor="expanded"
              role="button">View more ...</label>
              </div>
            </div>
          )) : <div className={styles.noPost}></div>}
        </div>

      </section>
      <section className={styles.advert1_wrapper}>
      <h1 className={styles.h1_advert1}>Youtube videos</h1>
        <div className={styles.advert1}>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      </div>
      </section>
      <section className={styles.mentalHealth}>
      {mentalHealth.length ? mentalHealth.map((p, index) => (
            <div onClick={() => Router.push(`/post/${p.slug}`)} key={index} className={styles.mental_post}>
              <img className={styles.mainImage} src={urlFor(p.mainImage)} alt="no image" />
              <div className={styles.avatar_date}>
              <Avatar name={p.authorName} picture={urlFor(p.authorImage)}/>
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
        <div>
            
        </div>
      </section>
      <section className={styles.advert2_wrapper}>
        <h1 className={styles.h1_advert2}>Podcast clips</h1>
        <div className={styles.advert2}>
      <div className={styles.circle1_1}></div>
      <div className={styles.circle2_1}></div>
      <div className={styles.circle3_1}></div>
      </div>
      </section>
      <section className={styles.lifestyle}>
      {lifestyle.length ? lifestyle.map((p,index) => (
            <div onClick={() => Router.push(`/post/${slug}`)} key={index} className={styles.lifestyle_post}>
              <img className={styles.mainImage} src={urlFor(p.mainImage)} alt="no image" />
              <div className={styles.avatar_date}>
              <Avatar name={p.authorName} picture={urlFor(p.authorImage)}/>
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
          )): <div className={styles.noPost}></div>}
      </section>
      <section className={styles.advert3}>
        <h1 className={styles.h1_advert3}>Latest youtube video</h1>
        <div className={styles.rect1}></div>
      </section>
      <section className={styles.foodRecipe}>
      {foodRecipe.length ? foodRecipe.map((p,index) => (
            <div onClick={() => Router.push(`/post/${slug}`)} key={index} className={styles.food_post}>
              <img className={styles.mainImage} src={urlFor(p.mainImage)} alt="no image" />
              <div className={styles.avatar_date}>
              <Avatar name={p.authorName} picture={urlFor(p.authorImage)}/>
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
            
          )): <div className={styles.noPost}></div> }
          
      </section>
    
    </div>

  </Layout>

);
export default Index;


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
    const newPost = await client.fetch(`*[_type == "post"][0...3]| order( publishedAt desc){_id,"slug": slug.current,title,body,mainImage,publishedAt,"authorImage":author->image,"authorName":author->name}`);
    const mentalHealth = await client.fetch(`*["mental_health" in categories[]->title][0...3]{_id,"slug": slug.current,title,body,mainImage,publishedAt,"authorImage":author->image,"authorName":author->name}`);
    const lifestyle = await client.fetch(`*["lifestyle" in categories[]->title][0...3]{_id,"slug": slug.current,title,body,mainImage,publishedAt,"authorImage":author->image,"authorName":author->name}`);
    const foodRecipe = await client.fetch(`*["food_recipe" in categories[]->title][0...3]{_id,"slug": slug.current,title,body,mainImage,publishedAt,"authorImage":author->image,"authorName":author->name}`);
  
    return {
        
      props: {
        newPost,
        mentalHealth,
        lifestyle,
        foodRecipe,
        
      }
    };
  }