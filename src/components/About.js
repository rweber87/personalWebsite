import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';


function About(){
	return(
		<Grid>
		    <Row className="about">
		      <Col xs={6} md={4}>
		        <Image src={require ("../assets/profile_pic.jpg")} responsive rounded />
		      </Col>
		      <Col xs={12} md={8}>
		      	Full Stack software engineer with a passion for coding, I have 6 years of demand forecasting, and data/analytics with Victoria's Secret. My prior role exposed me to building tools utilizing VBA, custom queries in SQL, which peaked my interest. I've decided to make the full transition into a role more software focused.
		      </Col>
		    </Row>
		</Grid>
	);

}

export default About