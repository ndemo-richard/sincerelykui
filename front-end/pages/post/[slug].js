import Head from 'next/head';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styles from '../../styles/Post.module.scss';
import Layout from '../../components/Layout';
import Date from '../../components/date';
import Avatar from '../../components/avatar';
import client from '../../client';
import Comments from '../../components/comments';
import Form from '../../components/form';
import { useRouter } from 'next/router';

function urlFor (source) {
    return imageUrlBuilder(client).image(source)
  }

export const Post = ({ _id, title, body, image,publishedAt, authorImage, authorName, comments }) => {

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
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
        <div className={styles.container}>

            <div className={styles.main}>
                
                {imageUrl && <img className={ styles.mainImage} src={imageUrl} />}
                <div className={styles.body_wrapper}>
                <h1 className={styles.post_title}>{title}</h1>
               <div className={styles.body}>
                   <BlockContent blocks={body} />
                </div>
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


                </div>
               
              <div className={styles.commentContainer}>
                 <div>
                 <Comments comments={comments} />
                 </div>
                 <div>
                 <Form _id={_id} />
                 </div>

                  </div>
            </div>
            <div>

            </div>
        </div>
        </Layout>

    )
};
export const getServerSideProps = async pageContext =>{
    const pageSlug = pageContext.query.slug;
    console.log(pageSlug);
    if (!pageSlug){
        return {
            notFound:true
        }
    }
    const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}"]{_id,title,body[]{...,asset->{...,"_key": _id}},mainImage,publishedAt,"authorImage":author->image,"authorName":author->name,'comments': *[_type == "comment" && post._ref == ^._id && approved == true]{
        _id,
        name,
        email,
        comment,
        _createdAt
    }}`)
    const url= `https://ogthfjsu.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then(res => res.json());
    const post = result.result[0];

    if(!post){
        return{
            notFound:true
        }
    } else{
        return{
            props:{
                body:post.body,
                title:post.title,
                image:post.mainImage,
                publishedAt:post.publishedAt,
                authorName:post.authorName,
                authorImage:post.authorImage,
                comments:post.comments,
                _id:post._id

            },
            //nextjs will try to re-generate the page
        revalidate:10, //in seconds
        }
    }

}

export default Post;