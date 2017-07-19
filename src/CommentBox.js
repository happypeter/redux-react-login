import React, { Component } from 'react'

class CommentBox extends Component {

  handleSubmit = (e) => {
    let newComment = this.commentInput.value
    this.props.addComment(newComment)
    e.preventDefault()
    this.commentForm.reset()
  }

  render() {
    return (
      <div className="comment-box">
        {
          this.props.comments.map(item => (
            <li className="comment" key={Math.random()}>{item}</li>
          ))
        }
        <form ref={value => this.commentForm = value}
          onSubmit={this.handleSubmit} className="comment-form">
          <input type="text" className="input" ref={value => this.commentInput = value} />
          <button type="submit" className="submit-btn">提交</button>
        </form>
        <div className="underline"></div>
      </div>
    );
  }
}

export default CommentBox
