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
            <div id="projects"> 
            <Row md={2} className='g-4'>
            {projects.map(proj => {
            return (
                <Col>
                <Card style={{ width: '30rem', marginLeft: "70px"}}>
                    <Card.Img variant="top" src={proj.image} />
                    <Card.Body style={{ backgroundColor: "var(--cloud)"}}>
                        <Card.Title>{proj.name}</Card.Title>
                        <Card.Text>{proj.description}</Card.Text>
                    </Card.Body>
                    <ListGroup  className="list-group-flush">
                        <ListGroup.Item style={{ backgroundColor: "var(--mint)" }}>{proj.skills[0]}</ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "var(--pink)" }}>{proj.skills[1]}</ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "var(--mint)" }}>{proj.skills[2]}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body style={{ backgroundColor: "var(--cloud)" }}>
                        <Button style={{ backgroundColor: "var(--teal)"}} className="button" href={proj.git}>GitHub Repo</Button>
                        <Button style={{ backgroundColor: "var(--teal)"}} className="button m-3" href={proj.live}>Live Demo</Button>
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