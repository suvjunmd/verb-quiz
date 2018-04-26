import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let answers = this.state.text.split(',');
    let b = '???';
    let c = '???';

    if (answers.length === 2) {
      b = answers[0].trim();
      c = answers[1].trim();
    }

    this.props.onSubmit({
      input_b: b,
      input_c: c
    });

    this.setState({
      text: ''
    })
  }

  render() {
    if (this.props.isCompleted) {
      return (<div>COMPLETED</div>)
    }

    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.question}
        {' '}
        <input
          type="text"
          autoFocus
          placeholder="simple past, past participle"
          value={this.state.text}
          onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    )
  }
}

export default Input;