import React, { Component } from 'react'

class CommentBox extends Component {
  state = {
    comments: [
      "第一条评论",
      "第二条评论"
    ]
  }
  render() {
    return (
      <div className="comment-box">
        {
          this.state.comments.map(item => (
            <li className="comment" key={Math.random()}>{item}</li>
          ))
        }
        <form className="comment-form">
          <input type="text" className="input" />
          <button type="submit" className="submit-btn">提交</button>
        </form>
        <div className="underline"></div>
      </div>
    );
  }
}

export default CommentBox
