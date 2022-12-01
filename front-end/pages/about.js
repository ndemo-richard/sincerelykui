

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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla in pellentesque eleifend, urna metus interdum turpis, et egestas dui justo vel neque. Nam ut nisl in nunc mattis mollis. Curabitur blandit velit sit amet diam volutpat, quis placerat libero cursus. Pellentesque pellentesque eget ipsum eu egestas. Maecenas elit nulla, luctus et quam ut, rhoncus sagittis massa. Nullam nec elementum dui. Fusce accumsan dictum tempor. In hac habitasse platea dictumst. Quisque ac bibendum sem. Curabitur ornare sagittis mauris nec cursus. Vivamus sagittis blandit tincidunt. Nunc pharetra nec sem tincidunt scelerisque.</p>
            <p>Ut eu turpis in magna bibendum suscipit. Sed hendrerit rutrum dolor eget ornare. Pellentesque nec porta felis. Pellentesque viverra feugiat vulputate. Proin eros velit, egestas non eleifend ut, euismod vitae leo. Vivamus feugiat auctor ligula. Nullam tincidunt lorem ac urna efficitur porttitor. Phasellus cursus efficitur sodales. Suspendisse et tempus mauris</p>
            <p>Donec hendrerit arcu ut nisi gravida tempor. Praesent vitae nibh eu felis dictum commodo. Nulla urna velit, maximus at dui ut, posuere maximus velit. Aenean feugiat varius augue vestibulum faucibus</p>
            <p>Nulla facilisi. Donec ullamcorper tempor ipsum, sit amet aliquet turpis tempus eu. Curabitur in efficitur dui, in dictum ipsum. Fusce commodo maximus commodo. Suspendisse auctor libero in elementum fermentum. Aliquam at tellus vel sem facilisis finibus non ac ligula. Nullam tortor leo, sodales in consectetur ut, sollicitudin consequat velit</p>
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