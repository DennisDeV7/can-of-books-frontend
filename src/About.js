import { Component } from "react";
import Card from 'react-bootstrap/Card';

class About extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <Card>
          <Card.Text>Dennis DeVries</Card.Text>
          <Card.Text>Army vet excited to enter the tech industry!</Card.Text>
        </Card>
        <Card>
          <Card.Text>Kris Dunning</Card.Text>
          <Card.Text>Air Force vet entering the tech industry as a software developer</Card.Text>
        </Card>
      </>
    )      
  }
};

export default About;
