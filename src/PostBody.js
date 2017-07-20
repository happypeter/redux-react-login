import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './store'

class PostBody extends Component {

  like() {
    store.dispatch({ type: 'INCREMENT_LIKE' })
  }

  render() {
    return (
      <div className="post-body">
        <div className="title">
          {this.props.postId}
        </div>
        <div onClick={this.like} className="likes-num num">
          {this.props.likes} 赞
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
  likes: state.likes
})

export default connect(mapStateToProps)(PostBody)
