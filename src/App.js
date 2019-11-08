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
    let i, j, temp;
    for (i = arr.length - 1; 1 > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  handleClick = (name) => {
    console.log(name);
    // const name = event.target.attributes.getNamedItem("name").value;
    // this.shuffleChars();
    this.checkPicked(name);

    this.setState({
      characters: this.shuffle(characters)

    });
  }

  shuffleChars = () => {
    this.setState({ characters: this.shuffle(characters) })
  }

  checkPicked = (name) => {
    if (this.state.pickedChars.includes(name)) {
        this.setState({
          message: `You have already chosen ${name}`,
          pickedChars: []
          })
        } else {
          this.state.pickedChars.push(name);
          console.log(this.state.pickedChars);
          this.setState({
            message: `Nice Choice. Who's next?`,
          })
        }
  }

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col>
              <Score />
            </Col>
          </Row>
          <Row>
            <Col>
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
    );
  }
}

export default App;
