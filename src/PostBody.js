import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostBody extends Component {
  render() {
    return (
      <div className="post-body">
        <div className="likes-num num">
          333 赞
        </div>
        <div className="comment-num num">
          {this.props.comments.length} 评论
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: state
})

export default connect(mapStateToProps)(PostBody)
