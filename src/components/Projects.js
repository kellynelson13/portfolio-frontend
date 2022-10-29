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
                <Card style={{ width: '30rem', marginLeft: "70px", boxShadow: "0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    <Card.Img variant="top" src={proj.image} />
                    <Card.Body style={{ backgroundColor: "white"}}>
                        <Card.Title>{proj.name}</Card.Title>
                        <Card.Text>{proj.description}</Card.Text>
                        <Card.Text>Main technologies used: <span>{proj.skills[0]}, {proj.skills[1]}, {proj.skills[2]}</span></Card.Text>
                    </Card.Body>
                    
                    <Card.Body style={{ backgroundColor: "white" }}>
                        <Button style={{ backgroundColor: "white", color: "var(--teal)",  border: "2px solid var(--teal)"}} className="button" href={proj.git}>GitHub Repo</Button>
                        <Button style={{ backgroundColor: "white", color: "var(--teal)",  border: "2px solid var(--teal)"}} className="button m-3" href={proj.live}>Live Demo</Button>
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