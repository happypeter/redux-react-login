import React, { Component } from 'react'

class CommentBox extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    let newComment = this.commentInput.value
    store.dispatch({type: 'ADD_COMMENT', comment: newComment})
    this.commentForm.reset()
  }

  render() {
    console.log(store.getState())
    return (
      <div className="comment-box">
        {
          this.state.comments.map(item => (
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

const mapStateToProps = (state) => ({
  comments: state
})

export default connect(mapStateToProps)(CommentBox)
