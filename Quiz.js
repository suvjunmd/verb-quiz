import React from 'react';
import ResultTable from './ResultTable';
import Input from './Input';
import Status from './Status'

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    const shuffledVerbs = this.shuffle(props.verbs);
    const index = 0;
    const question = shuffledVerbs[index].a;

    this.state = {
      shuffledVerbs: shuffledVerbs,
      results: [],
      index: index,
      question: question,
      isCompleted: false,
      doneCount: 0,
      correctCount: 0,
      wrongCount: 0
    }
  }

  /**
   * Shuffles array in place.
   * @param {Array} a items The array containing the items.
   */
  shuffle(array) {
    let copy = array.slice();

    var j, x, i;
    for (i = copy.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = copy[i - 1];
      copy[i - 1] = copy[j];
      copy[j] = x;
    }

    return copy;
  }

  handleSubmit = (e) => {
    const verb = this.state.shuffledVerbs.find(item => {
      return item.a === this.state.question;
    })

    const result = {
      question: this.state.question,
      input_b: e.input_b,
      input_c: e.input_c,
      answer_b: verb.b,
      answer_c: verb.c
    }
    const isCorrect = e.input_b === verb.b && e.input_c === verb.c;
    const index = (this.state.index < this.state.shuffledVerbs.length - 1) ? (this.state.index + 1) : -1;
    const question = index === -1 ? '' : this.state.shuffledVerbs[index].a;
    const isCompleted = index === -1;

    this.setState((prevState) => ({
      results: [result].concat(prevState.results),
      index: index,
      question: question,
      isCompleted: isCompleted,
      doneCount: prevState.doneCount + 1,
      correctCount: prevState.correctCount + (isCorrect ? 1 : 0),
      wrongCount: prevState.wrongCount + (!isCorrect ? 1 : 0)
    }))
  }

  render() {
    return (
      <div>
        <Input
          question={this.state.question}
          isCompleted={this.state.isCompleted}
          onSubmit={this.handleSubmit} />
        <Status
          remainingCount={this.state.shuffledVerbs.length - this.state.doneCount}
          doneCount={this.state.doneCount}
          correctCount={this.state.correctCount}
          wrongCount={this.state.wrongCount}
        />
        <ResultTable results={this.state.results} />
      </div>
    );
  }
}

export default Quiz;