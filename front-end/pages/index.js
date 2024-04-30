import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";
import Router from 'next/router';
import imageUrlBuilder from '@sanity/image-url';
import styles from '../styles/index.module.scss';
import Avatar from '../components/avatar';
import Layout from "../components/Layout";
import BlockContent from '@sanity/block-content-to-react';
import Date from '../components/date';
import { createClient } from "next-sanity";

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
}

const Index = ({ mentalHealth,lifestyle,foodRecipe,newPost })=>(

    <Layout>
    
    <div className={styles.wrapper}>
      <section className={styles.module_header}>
      
      <div className={styles.hook}></div>
      </section>

      <section className={styles.module_promo}>
        <div className={styles.one}>
          <h1>Life is too short to be left to the people or things that make you unhappy</h1>
          <p>welcome to sincerely blog where we talk about mental health, lifestyle and not forgetting giving you tips on your favourite food recipe</p>
          {/*<Link className={styles.intro_more} href="/allPost">all recent posts &nbsp; ➔</Link>*/}
        </div>
        <div className={styles.intro_wrapper}>
        <div className={styles.mainImage_intro}><img  src='/kui-lie.webp' alt="kui photo"  />
        <h3 className={styles.overlay_text}>Be fearlessly authentic</h3> 
        </div>  
        </div>
      </section>
      <section className={styles.mentalHealth}>
     {/* <h1>Make mental health your priority</h1>*/}
      <div className={styles.post_col_4}>
      {mentalHealth.length ? mentalHealth.map((p, index) => (
            <div onClick={() => Router.push(`/post/${p.slug}`)} key={index} className={styles.section_post}>
              <div className={styles.postImage} ><img src={urlFor(p.mainImage)} alt="no image" /></div>
              <div className={styles.avatar_date}>
              {/*<Avatar name={p.authorName} picture={urlFor(p.authorImage)}/>*/}
              {/*<Date dateString={p.publishedAt}/>*/}
              </div>
              <div className={styles.post_Body_Wrapper}>
              <h3 className={styles.post_title}>{p.title}</h3>
              <div className={styles.box}>
                <input type="checkbox" className={styles.expanded } placeholder='lorem ipsum'/>
              <div className={styles.blocks}><BlockContent blocks={p.body} /></div>
              </div>
              <div className={styles.authorDate}>
              <Date dateString={p.publishedAt}/>
              <Avatar name={p.authorName} picture={urlFor(p.authorImage)}/>
              </div>
              </div>
              
              
            </div>
          )) : <div className={styles.noPost}></div>}
        <div>
            
        </div>

      </div>
      <div className={styles.sidePannel}>
        <div className={styles.sideWrapper}>
          <h1>something amazing is comming here..</h1>

        </div>
      </div>

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
    const newPost = await client.fetch(`*[_type == "post"][0...2]| order( publishedAt desc){_id,"slug": slug.current,title,body,mainImage,publishedAt,"authorImage":author->image,"authorName":author->name}`);
    const mentalHealth = await client.fetch(`*["mental_health" in categories[]->title]| order( publishedAt desc){_id,"slug": slug.current,title,body,mainImage,publishedAt,"authorImage":author->image,"authorName":author->name}`);
    const lifestyle = await client.fetch(`*["lifestyle" in categories[]->title][0...3]| order( publishedAt desc){_id,"slug": slug.current,title,body,mainImage,publishedAt,"authorImage":author->image,"authorName":author->name}`);
    const foodRecipe = await client.fetch(`*["food_recipe" in categories[]->title][0...3]| order( publishedAt desc){_id,"slug": slug.current,title,body[]{...,asset->{...,"_key": _id}},mainImage,publishedAt,"authorImage":author->image,"authorName":author->name}`);
  

    return {
        
      props: {
        newPost,
        mentalHealth,
        lifestyle,
        foodRecipe,
        
      },
      //nextjs will try to re-generate the page
      revalidate:10, //in seconds
    };
  }