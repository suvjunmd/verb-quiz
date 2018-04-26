import React from 'react';

class ResultTable extends React.Component {
  render() {
    const errorStyle = { backgroundColor: 'HotPink' }
    const successStyle = { backgroundColor: 'Lime' }

    return (
      <table>
        <tbody>
          {this.props.results.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.question}</td>
                <td style={item.input_b === item.answer_b ? successStyle : errorStyle}>{item.input_b}</td>
                <td>{item.answer_b}</td>
                <td style={item.input_c === item.answer_c ? successStyle : errorStyle}>{item.input_c}</td>
                <td>{item.answer_c}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default ResultTable;