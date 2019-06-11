import React, { Component } from 'react'
import axios from 'axios'
import Article from './Article'
import update from 'immutability-helper'
import { Container, Card, Row, Col } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import {Link} from 'react-router-dom'
import Button from './CustomButtons/Button.jsx'
class ArticlesContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			articles: []
		}
	}

	componentDidMount() {
		axios.get('http://localhost:3001/api/v1/articles.json')
		// axios.get('http://52.221.214.165:4002/api/v1/articles.json')
		.then(response => {
			console.log(response)
			this.setState({articles: response.data})
		})
		.catch(error => console.log(error))
	}

  render() {
    return (
      <Container>
        <Row>
            {this.state.articles.map((article) => {
                return (
								<Col lg={4}>
									<div className="tile" key={article.id}>
											<Card style={{ width: '18rem' }}>
													<Card.Img variant="top" src="holder.js/100px180" />
													<Card.Body>
															<Card.Title>{article.header}</Card.Title>
															<Card.Text>
																	<ReactMarkdown source={article.content} />                        
															</Card.Text>
															<Button variant="contained" color="primary">
																<Link to={`/article/${article.id}`}>Go somewhere</Link>
															</Button>
													</Card.Body>
											</Card>
									</div>
									<Button variant="contained" color="secondary">
										<Link to={`/article/${article.id}`}>Go somewhere</Link>
									</Button>	
								</Col>    
							)            
            })}
        </Row>
      </Container>
    )
  }
}

export default ArticlesContainer