import React from "react";

class Smurf extends React.Component {
  render() {
    const { smurfs } = this.props;

    return (
      <div data-testid="smurf" className="card">
        {smurfs.map((item, index) => (
          <div className="smurfs" key={index}>
            <h2>
              {item.name} - <span>{item.nickname}</span>
            </h2>
            <h4>{item.position}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.
