import React, { Component } from 'react'
import PostBody from './PostBody'
import CommentBox from './CommentBox'

class PostPage extends Component {

  render() {
    return (
      <div>
        <div className="top  clearfix">
          <PostBody  />
        </div>
        <div className="bottom clearfix">
          <CommentBox />
        </div>
      </div>
    )
  }
}

export default PostPage;
