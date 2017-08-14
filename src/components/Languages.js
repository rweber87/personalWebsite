import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Grid, Row, Col, Image } from 'react-bootstrap';

function Languages() {
	var ruby = "Ruby";
	var js = "Javascript";
	var react = "React";
	var sql = "SQL"
	var jq = "JQuery";
	var html = "HTML";
	var css = "CSS";
	

	return(
		<Grid>
			<Row className='about'>
				<Col xs={18} md={12}>
					<ProgressBar now={90} label={`${ruby}`} />
					<ProgressBar now={90} label={`${js}`} />
					<ProgressBar now={100} label={`${react}`} />
					<ProgressBar now={75} label={`${sql}`} />
					<ProgressBar now={65} label={`${jq}`} />
					<ProgressBar now={70} label={`${html}`} />
					<ProgressBar now={70} label={`${css}`} />
				</Col>
			</Row>
		</Grid>
	);

}

export default Languages;