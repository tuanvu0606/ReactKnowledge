import React, { Component } from 'react'
import axios from 'axios'
import { Container, Card, Row, Col } from 'react-bootstrap'
import ReactMarkdown, { renderers } from 'react-markdown'
import Button from '@material-ui/core/Button'
class Article extends Component {
	constructor(props) {
        super(props)
        console.log(props)
		this.state = {
            articles: []            
        }
        this.id = props.match.params.id
        // console.log(id)
	}


    componentDidMount() {
		axios.get(`http://localhost:3001/api/v1/articles/${this.id}.json`)
		// axios.get('http://52.221.214.165:4002/api/v1/articles.json')
		.then(response => {
			console.log(response)
			this.setState({articles: response.data})
		})
		.catch(error => console.log(error))
    }
    
    render() {    
        console.log(this.state.articles.id)
        return (
            <Container>
                <Col lg={4}>
                    <div className="tile" key={this.state.articles.id}>
                            <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>{this.state.articles.header}</Card.Title>
                                        <Card.Text>
                                                <ReactMarkdown source={this.state.articles.content} />                        
                                        </Card.Text>
                                                <Button type="button"  color="info" href="articles/">
                                                        Go somewhere
                                                </Button>
                                    </Card.Body>
                            </Card>
                    </div>									
                </Col> 
            </Container>
          )
      }
}
export default Article