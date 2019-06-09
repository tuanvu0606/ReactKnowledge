import React from 'react'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

const Article = ({article}) =>    
    <Col lg={4}>
        <div className="tile" key={article.id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{article.header}</Card.Title>
                    <Card.Text>
                        <ReactMarkdown source={article.content} />                        
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    </Col>    
export default Article