import React, { Fragment } from "react";

export default class App extends React.Component {
  //We can have html code inside of a variabel
  name = <h5>Grit Academy</h5> 
  nameTwo = "Grit Academy"
  //We can call another variable inside html code
  message = <h1>Welcome to <i>{this.nameTwo}</i></h1>
  //Add paraentes to your variable if it contains more than one row of html code
  longMessage = (
    <div>
      {this.name}
      {this.message}
    </div>
  )

  //The below function takes a car object (which is defined below in the document) and then 
  //returns html code that contains car object info
  //If car.show is true, we show car info otherwise we show nothing. WE do that with the help of Ternary operators
  displayCarInfo = (car) => {
    car.type = "Not Ford"
    return (
      car.show === true ?
        <div>
          <h1>The car type is {car.type === "Not Ford" ? "Ford is the best" : ""} and has the color <i>{car.color}</i> and model of {car.model} </h1>
          <img src={car.imageUrl} alt={car.imageAltText}></img>
        </div>
        :
        ""
    )
  }

  isPositiveNumber = (number) => {
    // Option one
    /* if (number < 0) {
      return <h1>The number {number} is less than 0</h1>
    } else {
      return <h1>The number {number} is bigger than 0</h1>
    } */

    //Option two
    /*     let result = number < 0 ? <h1>The number {number} is less than 0</h1> : <h1>The number {number} is bigger than 0</h1>
        return result; */

    //Option Three
    return number < 0 ? <h1>The number {number} is less than 0</h1> : <h1>The number {number} is bigger than 0</h1>
  }

  car = {
    type: "Ford",
    color: "Red",
    imageUrl: "./images/ford.png",
    imageAltText: "Ford Image",
    model: 2022,
    show: false
  }

  ternaryOperator = () => {
    let check = true;
    /*  if (check){//check === true
       return <h1>True</h1>
     } else {
       return <h1>False</h1>
     } */
    //Ternary operator works as the comment below. 
    //condition ? code if true : code if false
    return check === true ? <h1>True</h1> : <h1>False</h1>;
  }

  cal = { // Object that has two functions
    add: (a, b) => {
      return <h1>Add function gives {a + b}</h1>
    },
    subtract: (a, b) => {
      return <h1>Subtract function gives {a - b}</h1>
    }
  }
  users = [{
    id: "123",
    name: "Björn",
    age: 29,
    city: "Malmö"
  }, {
    id: "234",
    name: "Alex",
    age: 55,
    city: "Berlin"
  }, {
    id: "345",
    age: 2,
    city: "Kristianstad"
  }]

  displayUsersInfo = () => {
    return (
      <ul>
        {this.users.map((value, index) => {
          return ( //Don't forget to add return inside map function since map returns data
            <li key={value.id/* index */}>
              <h1 id={value.id}>Name: {value.name || "Okänd"} { /* || symbol is used in this case to provide a default value when value.name is undefined as in users[2]*/}</h1>
              <h2 className="user-className">Age: {value.age}</h2>
              <h3>Lives at: {value.city}</h3>
            </li>
          )
        })}
      </ul>
    )
  }
  render() {
    return (
      <Fragment>
        {this.ternaryOperator()}
        <h1>Hello React!</h1>
        {this.name}
        {this.message}
        {/* Comment */}
        {/* this.longMessage */}
        {this.displayCarInfo(this.car)}
        {this.isPositiveNumber(-3)}
        {this.cal.add(8, 5)}
        {this.cal.subtract(8, 5)}
        {this.displayUsersInfo()}
      </Fragment>
    )
  }
}