import React, { Component } from 'react'
import axios from 'axios'
import { Container, Card, Row, Col } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import Button from '@material-ui/core/Button'
class Article extends Component {
    constructor(props) {
		super(props)
		this.state = {
			article: []
		}
    }
    
fetchArticle() {
    axios.get('http://localhost:3001/api/v1/articles/37.json')
    // axios.get('http://52.221.214.165:4002/api/v1/articles.json')
    .then(response => {
        console.log(response)
        this.setState({article: response.data})
    })
    .catch(error => console.log(error))
}


render() {
    return (
        <div>
            {this.state.article.map((article) => {
                return (
                <Col lg={4}>
                    <div className="tile">
                            <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                            <Card.Title>{article.header}</Card.Title>
                                            <Card.Text>
                                                    <ReactMarkdown source={article.content} />                        
                                            </Card.Text>
                                            <Button variant="contained" color="secondary">
                                                {/* <Link to={`/article/${article.id}`}>Go somewhere</Link> */}
                                            </Button>
                                    </Card.Body>
                            </Card>
                    </div>
                </Col>    
            )            
            })}
        </div>        
    )
  }    
}    
export default Article