import React, { Component } from 'react'
import axios from 'axios'
import Article from './Article'
import update from 'immutability-helper'
import { Container, Card, Row, Col } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import {Link, Route} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
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
		<MDBContainer>
      <MDBRow>
        <MDBCol md="10">
					<MDBCard className="my-5 px-5 pb-5">
						<MDBCardBody>
							<h2 className="h1-responsive font-weight-bold text-center my-5">
								Recent posts
							</h2>
							<p className="text-center w-responsive mx-auto mb-5">
								Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
								cupidatat non proident, sunt in culpa qui officia deserunt mollit
								anim id est laborum.
							</p>
							{this.state.articles.map((article) => {
                return (
									<div>
							<MDBRow>
								<MDBCol lg="8">
									<MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
										<img
											className="img-fluid"
											// src="https://i.ibb.co/8XFLNN3/don-vao-duong-cung-1481521547-400.jpg"
											alt=""
										/>
										<Video autoPlay loop muted
											controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
											poster="http://sourceposter.jpg"
											onCanPlayThrough={() => {
												// Do stuff
											}}>
											<source src="https://dump.video/i/M5jQVx.mp4
											" type="video/webm" />
											<track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
										</Video>
										<a href="#!">
											<MDBMask overlay="white-slight" />
										</a>
									</MDBView>
								</MDBCol>
								<MDBCol lg="4">
									<a href="#!" className="green-text">
										<h6 className="font-weight-bold mb-3">
											<MDBIcon icon="utensils" className="pr-2" />
											Food
										</h6>
									</a>
									<h3 className="font-weight-bold mb-3 p-0">
										<strong>{article.header}</strong>
									</h3>
									<p>
										<ReactMarkdown source={article.content} />
									</p>
									<p>
										by
										<a href="#!">
											<strong> Carine Fox</strong>
										</a>
										, 19/08/2018
									</p>
									<Link to={`/article/${article.id}`} style={{ textDecoration: 'none' }}>
										<MDBBtn color="success" size="md" className="waves-light ">
											Read more
										</MDBBtn>
									</Link>
								</MDBCol>
							</MDBRow>
							<hr className="my-5" />		
							</div>
							)            
            })}													
						
						</MDBCardBody>
					</MDBCard>				
				</MDBCol>
        <MDBCol md="2" className="StickyBar">
						asdasd
				</MDBCol>        
      </MDBRow>
    </MDBContainer>        
    )
  }
}

export default ArticlesContainer