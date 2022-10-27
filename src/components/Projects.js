import React, {useState, useEffect} from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';



const Projects = () => {

    const [projects, setProjects] = useState(null)

    const URL = "https://kelly-nelson-portfolio.herokuapp.com/projects"

    const getProjects = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setProjects(data);
    }

    useEffect(() => {
        getProjects();
    })

    const loading = () => {
        return <Spinner animation="border" variant="secondary" />
    }

    const loaded = () => {
        return (
            <Container>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={projects[0].image} />
              <Card.Body>
                <Card.Title>{projects[0].name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Container>
          );
    }






  return (
    <>
    {projects ? loaded() : loading()}
    </>
  )
}

export default Projects