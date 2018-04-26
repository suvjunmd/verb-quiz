import React from 'react';

const Status = (props) => (
  <div>
    <hr />
    Remaining: {props.remainingCount}, Done: {props.doneCount}, Correct: {props.correctCount}, Wrong: {props.wrongCount}
    <hr />
  </div>
)

export default Status;