import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

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
					<h2 className="section-label pull-left" >Language Proficiency</h2>
				</Col>
				<Col xs={18} md={12}>
					<ProgressBar bsClass="progress-bar ruby" now={90} label={`${ruby}`} />
					<ProgressBar bsClass="progress-bar js" now={90} label={`${js}`} />
					<ProgressBar bsClass="progress-bar react" now={100} label={`${react}`} />
					<ProgressBar bsClass="progress-bar sql" now={75} label={`${sql}`} />
					<ProgressBar bsClass="progress-bar jq" now={65} label={`${jq}`} />
					<ProgressBar bsClass="progress-bar html" now={70} label={`${html}`} />
					<ProgressBar bsClass="progress-bar css" now={70} label={`${css}`} />
				</Col>
			</Row>
		</Grid>
	);

}

export default Languages;