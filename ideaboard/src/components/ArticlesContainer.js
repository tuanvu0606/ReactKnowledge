import React, { Component } from 'react'
import axios from 'axios'
import Article from './Article'
import update from 'immutability-helper'
import { Container, Row} from 'react-bootstrap'

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
                return (<Article article={article} key={article.id} />)            
            })}
        </Row>
      </Container>
    )
  }
}

export default ArticlesContainer