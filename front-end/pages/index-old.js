import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import  Layout  from '../components/layout';
import Date from '../components/date';
import Avatar from '../components/avatar';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BlockContent from '@sanity/block-content-to-react';
import Meta from '../partials/seo-meta.js'

export default function Home({ posts}) {


  const router = useRouter();
  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: 'om0uizd8',
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

  return (


    <Layout>
      <Head>
    <title>Sincerely Kui - A Mental-health & lifestyle blog</title>
      <meta name="description" content="Stories of someone with too much time to spend" />
      <meta name="robots" content="index, follow"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="canonical" href="https://www.sincerelykui.com" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@sincerelykui" />
      <meta name="twitter:title" content="@sincerelykui" />
      <meta name="twitter:description" content="stories of someone with too much time to spend" />
      <meta name="twitter:image" content="https://unsplash.com/photos/0drW3CxGkfw" />
                </Head>

    <div className={styles.container}>

      <div className={styles.main}>
        <h1 className={styles.myblog_title}>Finally you are here!</h1>

        <h3 className={styles.myblog_description}>stories of someone with too much time to spend</h3>

        <div className={styles.feed}>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/post/${p.slug}`)} key={index} className={styles.post}>
              <img className={styles.mainImage} src={p.mainImage} alt="no image" />
              <div className={styles.avatar_date}> 
              </div>
              <div className={styles.post_content}>
              <h3 className={styles.post_title}>{p.title}</h3>
              <div className={styles.post_author}>
              <Avatar name={p.authorName} picture={p.authorImage}/>
              <Date dateString={p.publishedAt}/>
              </div>
              <div className={styles.box}>
                <input type="checkbox" className={styles.expanded} />
              <div className={styles.blocks}><BlockContent blocks={p.body} /></div>
              <label htmlFor="expanded"
              role="button">view post ...</label>
              </div>
              </div>
          
            </div>
          )) : <div className={styles.noPost}></div>}
        </div>
        <div className={styles.section2}>
          <p>this is a break point for the blog</p>
        </div>
      </div>
    </div>
    </Layout>

  );
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*[ _type == "post"]| order( publishedAt desc){_id,"slug": slug.current,title,body,publishedAt,mainImage,"authorImage":author->image,"authorName":author->name}',);
  const url = `https://om0uizd8.api.sanity.io/v1/data/query/production?query=${query}`;
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