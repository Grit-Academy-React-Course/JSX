import React, { Fragment } from "react";

export default class App extends React.Component {
  myName = <h2>Omar Kalthoum</h2>
  welcomeMesage = (
    <div>
      <span>Hello {this.myName}</span>
      <span>I live in Kristianstad</span>
    </div>
  )

  inDivisible = (a, b) => {
    return (a % b) === 0 ? <h1>{a} är delbart med {b}</h1> : <h1>{a} är INTE delbart med {b}</h1>
  }

  animals = [{
    type: "dog",
    age: 2,
    color: "White",
    owner: "Sara",
    alive: true
  },
  {
    type: "cat",
    age: 5,
    color: "Black",
    alive: true
  },
  {
    type: "dog",
    age: 10,
    color: "Brown",
    owner: "Max",
    alive: false,
    deathYear: 2021
  }]

  displayAnimalsInfo = () => {
    return (
      <ul>
        {this.animals.map((value, index) => {
          return (
            value.alive ?
              <li key={index}>
                <h1>Type: {value.type}</h1>
                <h2>Age: {value.age}</h2>
                <h3>Color: {value.color}</h3>
                <h4>Owner: {value.owner || "Okänd"}</h4>
              </li>
              :
              <li key={index}>
                <h1>Type: {value.type}</h1>
                <h2>Death Year: {value.deathYear}</h2>
              </li>
          )
        })}
      </ul>
    )
  }
  render() {
    return (
      <Fragment>
        <h1>Hello React!</h1>
        {this.myName}
        <span className="divider"></span>
        {this.welcomeMesage}
        <span className="divider"></span>
        {this.inDivisible(10, 5)}
        {this.inDivisible(11, 5)}
        <span className="divider"></span>
        {this.displayAnimalsInfo()}
        <span className="divider"></span>
      </Fragment>
    )
  }
}