import Head from 'next/head'
import styles from '../styles/Lifestyle.module.scss'
import  Layout  from '../components/Layout';
import Date from '../components/date';
import Avatar from '../components/avatar';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BlockContent from '@sanity/block-content-to-react';

export default function Lifestyle({ posts}) {


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

  return (


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
        <h1 className={styles.myblog_title}>Lifestyle</h1>

        <h3 className={styles.myblog_description}>Live your life heeee</h3>

        <div className={styles.feed}>
          {mappedPosts.length ? mappedPosts.map((p, index) => (
            <div onClick={() => router.push(`/post/${p.slug}`)} key={index} className={styles.post}>
              <img className={styles.mainImage} src={p.mainImage} alt="no image" />
              <div className={styles.avatar_date}>
              <Avatar name={p.authorName} picture={p.authorImage}/>
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
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent('*["lifestyle" in categories[]->title][0...3]{_id,"slug": slug.current,title,body,mainImage,publishedAt,"authorImage":author->image,"authorName":author->name}',);
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