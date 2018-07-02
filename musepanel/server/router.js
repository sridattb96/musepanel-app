import React from 'react'
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { ServerStyleSheet } from 'styled-components'; // <-- importing ServerStyleSheet
import Html from './Html';

// import our custom components
import App from '../src/App';

// initialize the application and create the routes
const app = express();

function generatePage(title, component){
	const sheet = new ServerStyleSheet();
	const body = ReactDOMServer.renderToString(sheet.collectStyles(component));
	const styles = sheet.getStyleTags();

	return Html({ body, styles, title });
}

/********************************/
/* All of our endpoints go here */

app.get('/', (req, res) => {
	var page = generatePage("MusePanel Home", <App queryParams={req.query}/>);
	res.send(page);
});

/********************************/

// tell the app to use the above rules
app.use(express.Router());

// start the app
app.listen(3000);

