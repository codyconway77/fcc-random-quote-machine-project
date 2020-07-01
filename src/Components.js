import React from 'react';

class QuoteBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          quotes: [
              {text: "One small step for America, One giant step for mankind.", author: 'President'},{text: '', author: ''},{text: '', author: ''},{text: '', author: ''},{text: '', author: ''},{text: '', author: ''}
          ]
      };
    }
    render() {
      <div>
          <Text/>
          <Author/>
          <TweetQuote/>
          <NewQuote/>
      </div>
    }
  }
  class Text extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
    <p>{this.props.quotes[0].text}</p>
    }
  }
  class Author extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      <p>{this.props.quotes[0].author}</p>
    }
  }
  class NewQuote extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      <button>New</button>
    }
  }
  class TweetQuote extends React.Component {
      constructor(props) {
          super(props);
      }
      render() {
          <button>Tweet</button>
      }
}  
export default QuoteBox;
export default Text;
export default Author;
export default NewQuote;
export default TweetQuote;