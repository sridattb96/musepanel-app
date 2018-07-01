import React from 'react'
import ReactDOMServer from 'react-dom/server';
import express from 'express';

// import our components
import App from '../src/App';

const path = require('path');
const fs = require("fs");

// initialize the application and create the routes
const app = express();
const router = express.Router();

function renderPage(res, componentInstance){
	fs.readFile(path.resolve(__dirname, '..', 'public', 'index.html'), 'utf8', (err, htmlData) => {
	  if (err) {
	      console.error('err', err);
	      return res.status(404).end();
	  }

	  const html = ReactDOMServer.renderToString(componentInstance);

	  return res.send(
	      htmlData.replace(
	          '<div id="root"></div>',
	          `<div id="root">${html}</div>`
	      )
	  );
	});
}

/********************************/
/* All of our endpoints go here */

app.get('/', (req, res) => {
	renderPage(res, <App queryParams={req.query}/>);
});

/********************************/

// tell the app to use the above rules
app.use(router);

// start the app
app.listen(process.env.PORT || 3000, console.log("Listening on port 3000..."));

