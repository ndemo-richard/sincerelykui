

import Layout from '../components/Layout';
import styles from '../styles/About.module.scss';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const about =()=>(
    <Layout>
        <div className={styles.wrapper}>
        <section className={styles.module_header}>
      <div className={styles.logo}>
      <img src="/logo.png" alt="logo" />
      </div>
      <div className={styles.hook}></div>
      </section>
      <section className={styles.module_body}>
        <div className={styles.body_h1}>About Kui</div>
        <div className={styles.body_wrapper}>
        <div className={styles.mainImage_intro}><img  src='/kui.jpeg' alt="kui photo"  /></div>
        <div className={styles.body_content}>
           <p>Heey!</p>
<p>I’m Kui</p>
<p>I’m a psychologist, writer, coffee lover and obsessed with this Turkish series ‘’love for rent’’.</p>
<p>Living in a world that most often exerts pressure on us to ‘’fit in’’ can be overwhelming and many like
me are sucked into believing that we actually need to ‘’fit in’’ to feel like we belong. So, what will
happen if we actually be OURSELVES instead of trying so hard to ‘’fit in’’ in a world that is constantly
trying to make us something else?</p>
<p>I’m here to help you become FEARLESS AUTHENTIC; to be yourself and live a life that not only looks
good on the outside but also feels good on the inside. To be REAL, be true to your values regardless of
what the society and others think or expect of you!</p>
        </div>
        </div>
      </section>
        </div>
      

    </Layout>
);

export default about;

const client = createClient({
    projectId: "ogthfjsu",
    dataset: "production",
    apiVersion: "2021-10-14",
    useCdn: false
});

const builder = imageUrlBuilder(client);

function urlFor(source){
    return builder.image(source);
}