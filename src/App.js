import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import { Container, Row, Col } from "./components/Container";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbo";
import Nav from "./components/Nav";
import Score from "./components/Score";
import characters from "./characters.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    pickedChars: [],
    topScore: 0,
    score: 0,
    message: ""
  };


  shuffle = (arr) => {
    console.log("pbj",arr);
    let j, temp;
  
    for (var i = arr.length -1; i > 0; i--) {
      console.log("start", i);
      j = Math.floor(Math.random() * (i));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    console.log("done for");
    return arr;
  };

  // shuffle = array => {
  //      let count = array.length, temp, rand;
  //      while (count) {
  //          // Pick a remaining element…
  //          rand = Math.floor(Math.random() * count--);
  //          // And swap it with the current element.
  //          temp = array[count];
  //          array[count] = array[rand];
  //          array[rand] = temp;
  //      }
  //      return array;
  //  };

  handleClick = (name) => {
    console.log(name);
    // const name = event.target.attributes.getNamedItem("name").value;
    // this.shuffleChars();
    this.checkPicked(name);
    console.log("Before:", this.state.characters);
    this.setState({
      characters: this.shuffle(characters)
    }); 
    console.log("shuffle done?");
  };

  // shuffleChars = () => {
  //   console.log("func");
  //   this.setState({ characters: this.shuffle(characters) })
  // };

  checkPicked = (name) => {
    console.log("start");
    if (this.state.pickedChars.includes(name)) {
      console.log("if");
        this.setState({
          message: `You have already chosen ${name}`,
          pickedChars: [],
          score: 0
          })
        } else {
          console.log("else");
          this.state.pickedChars.push(name);
          let newScore = this.state.pickedChars.length;
          console.log(newScore);
          if (this.state.topScore < newScore){
            this.setState({
              message: `Nice Choice. Who's next?`,
              score: newScore,
              topScore: newScore
            })
          } else {
            this.setState({
              message: `Nice Choice. Who's next?`,
              score: newScore
            })
          }
    }
  };


  render() {
    return (
      <div>
        <Nav />
        <Jumbotron message={this.state.message} />
        <Container>
          <Row>
            <Col>
              <Score
                score={this.state.score}
                topScore={this.state.topScore}
              />
            </Col>
          </Row>
          <Row>
            <Col>
            {console.log("After:", this.state.characters)}
            {this.state.characters.map(character => (
              <Card
              key={character.id}
              data-id={character.id}
              name={character.name}
              image={character.image}
              handleClick={this.handleClick}
              />
            ))}
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default App;
