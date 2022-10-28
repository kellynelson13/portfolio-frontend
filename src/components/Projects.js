import React, {useState, useEffect} from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



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
            <div className="list"> 
            <Row md={2} className='g-4'>
            {projects.map(proj => {
            return (
                <Col>
                <Card style={{ width: '30rem', marginLeft: "70px"}}>
                    <Card.Img variant="top" src={proj.image} />
                    <Card.Body>
                        <Card.Title>{proj.name}</Card.Title>
                        <Card.Text>{proj.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{proj.skills[0]}</ListGroup.Item>
                        <ListGroup.Item>{proj.skills[1]}</ListGroup.Item>
                        <ListGroup.Item>{proj.skills[2]}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Button href={proj.git}>GitHub Repo</Button>
                        <Button className="m-3" href={proj.live}>Live Demo</Button>
                    </Card.Body>
                </Card>
                </Col>
    
            )
        })}
        </Row>
        </div>
        )
            
          
    }






  return (
    <>
    {projects ? loaded() : loading()}
    </>
  )
}

export default Projects