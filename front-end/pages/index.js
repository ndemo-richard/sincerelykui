import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import Router from 'next/router';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import imageUrlBuilder from '@sanity/image-url';
import styles from '../styles/index.module.scss';
//data
import Layout from "../components/Layout";
import BlockContent from '@sanity/block-content-to-react';
import Date from '../components/date';


export default function Index({posts}){

  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'ogthfjsu',
        dataset: 'production',
      });

      setMappedPosts(
        posts.map(p => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250),
            authorImage:imgBuilder.image(p.authorImage),


          }
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);
  

  return(

  <Layout>
    
    <div className={styles.wrapper}>
      <section className={styles.module_header}>
      <div className={styles.logo}>
      <img src="/sincerely.svg" alt="logo" />
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
        {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/post/${p.slug}`)} key={index} className={styles.post}>
              <img className={styles.mainImage} src={p.mainImage} alt="no image" />
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
          )) :<div className={styles.noPost}></div>}

        {/*<div className={styles.two}></div>
        <div className={styles.three}></div>*/}
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
        <div className={styles.box1_1}></div>
        <div className={styles.box1_2}></div>
        <div className={styles.box1_3}></div>
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
      <div className={styles.box2_1}></div>
        <div className={styles.box2_2}></div>
        <div className={styles.box2_3}></div>
      </section>
      <section className={styles.advert3}>
        <h1 className={styles.h1_advert3}>Latest youtube video</h1>
        <div className={styles.rect1}></div>
      </section>
      <section className={styles.foodRecipe}>
      <div className={styles.box3_1}></div>
        <div className={styles.box3_2}></div>
        <div className={styles.box3_3}></div>
      </section>
    
    </div>

  </Layout>
  

  );

}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*["lifestyle" in categories[]->title][0...2]{title,body,mainImage,publishedAt}',);
  const url = `https://ogthfjsu.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      }
    }
  } else {
    return {
      props: {
        posts: result.result,
      }
    }
  }
};

