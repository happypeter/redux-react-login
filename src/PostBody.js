import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './store'

class PostBody extends Component {

  like = () => {
    store.dispatch({ type: 'INCREMENT_LIKE', postId: this.props.postId })
  }

  render() {
    let { postId, posts } = this.props
    let currentPost = posts.filter(value => value.postId === postId )[0]
    return (
      <div className="post-body">
        <div className="title">
          {currentPost.title}
        </div>
        <div onClick={this.like} className="likes-num num">
          {currentPost.likes} 赞
        </div>
        <div className="comment-num num">
          {this.props.comments.length} 评论
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments,
  posts: state.posts
})

export default connect(mapStateToProps)(PostBody)
