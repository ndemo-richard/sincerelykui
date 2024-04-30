import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/Post.module.scss';
import Head from 'next/head';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import Date from '../../components/date';
import Avatar from '../../components/avatar';
import client from '../../client';
import Comments from '../../components/comments';
import Form from '../../components/form';
import DisqusComments from '../../components/DisqusComments';

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }


export const Post = ({ _id, title, body, image, publishedAt, authorImage, authorName, comments, mentalHealth }) => {
    const router = useRouter();
    const [imageUrl, setImageUrl] = useState('');
    const [AuthorUrl, setAuthorUrl] = useState('');

    useEffect(() => {
        const imgUrlBuilder = imageUrlBuilder({
            projectId: 'ogthfjsu',
            dataset:'production',
        });
        setImageUrl(imgUrlBuilder.image(image));
        setAuthorUrl(imgUrlBuilder.image(authorImage));

    },  []);

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.main}>
                <div className={styles.body_wrapper}>
                <h1 className={styles.post_title}>{title}</h1>
                {imageUrl && <img className={ styles.mainImage} src={imageUrl} />}
               <div className={styles.body}>
                   <BlockContent blocks={body} />
                </div>
                </div>
                
                {/* Section for displaying related posts */}
                <div className={styles.col1}>
                    <h2>You Might Also Like</h2>
                    <div className={styles.relatedPost}>
                    {mentalHealth && mentalHealth.length ? (
                        mentalHealth.map((p, index) => (
                            <div onClick={() => router.push(`/post/${p.slug}`)} key={index} className={styles.section_post}>
                                {/* Render related post content here */}
                               {/* <div className={styles.postImage}><img src={urlFor(p.relImage)} alt="no image" /></div>*/}
                                <h3 className={styles.rel_title}>{p.title}</h3>
                            </div>
                        ))
                    ) : (
                        <div className={styles.noPost}>No related posts found.</div>
                    )}

                    </div>
                   
                </div>
                <div className={styles.col2}>
                <div className={styles.avatar_date}>
             <div className={styles.avatarContainer}>
             {authorImage && (
                            <div className={styles.avatarRoundImage}>
                            <img className={styles.avatarRoundImage} src={AuthorUrl}/>
                            </div>
                             )}
                  <div className={styles.avatarFont}>{authorName}</div>
             </div>
              <Date dateString={publishedAt}/>
              </div>
              <div class="shareaholic-canvas" data-app="total_share_count"  ></div>
              <div class="shareaholic-canvas" data-app="share_buttons" data-app-id="33127216"></div>


                </div>
                </div>
                <div className={styles.commentContainer}>
                <DisqusComments/>
                {/*} <div>
                 <Comments comments={comments} />
                 </div>
                 <div>
                 <Form _id={_id} />
             </div>*/}
             </div>
            <div>

            </div>
            </div>
        </Layout>
    );
};

export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug;

    // Fetch current post
    const postQuery = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}"]{ ..., "authorImage": author->image, "authorName": author->name }`);
    const postUrl = `https://ogthfjsu.api.sanity.io/v1/data/query/production?query=${postQuery}`;
    const postResult = await fetch(postUrl).then((res) => res.json());
    const currentPost = postResult.result[0];
    const comments = currentPost.comments || [];

    if (!currentPost) {
        return { notFound: true };
    }

    /// Fetch related posts (mental health posts)
    const mentalHealthQuery = `*[ _type == "post" && _id != "${currentPost._id}" && "mental_health" in categories[]->title][0...3]| order( publishedAt desc){_id,"slug": slug.current,title,body,"relImage":mainImage,publishedAt,"authorImage":author->image,"authorName":author->name}`;
    const mentalHealthUrl = `https://ogthfjsu.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(mentalHealthQuery)}`;
    const mentalHealthResult = await fetch(mentalHealthUrl).then((res) => res.json());
    const mentalHealth = mentalHealthResult.result;

    return {
        props: {
            body: currentPost.body,
            title: currentPost.title,
            image: currentPost.mainImage,
            publishedAt: currentPost.publishedAt,
            authorName: currentPost.authorName,
            authorImage: currentPost.authorImage,
            comments: comments,
            _id: currentPost._id,
            mentalHealth: mentalHealth,
        },
    };
};

export default Post;
