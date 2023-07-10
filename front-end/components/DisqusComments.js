import React, { Component } from "react"
import Disqus from "disqus-react"
import Post from "../pages/post/[slug]"

export default class extends Component {
  render() {
   
    const disqusShortname ="sincerelykui-com"
    const disqusConfig = {
      //url: "http://localhost:3000",
      urls: "sincerelykui.com/post",
      //urls:"http://0.0.0.0:3000/post",
      identifier:Post._id,
      title: Post.title,
    }

    return (
      <div className="article-container">

        <h1 className="head1">Leave a Comment:</h1>

        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
        <style jsx>{`
        .head1{
          color:red;
        }

        `
        }</style>
      </div>
    )
  }
}