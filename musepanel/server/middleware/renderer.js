// import React from 'react'
// import ReactDOMServer from 'react-dom/server'

// // import our main App component
// import App from '../../src/App';

// const path = require("path");
// const fs = require("fs");

// export default (req, res, next) => {
//     // point to the html file created by CRA's build tool
//     const filePath = path.resolve(__dirname, '..', '..', 'public', 'index.html');

//     fs.readFile(filePath, 'utf8', (err, htmlData) => {

//         if (err) {
//             console.error('err', err);
//             return res.status(404).end()
//         }

//         // render the app as a string
//         const html = ReactDOMServer.renderToString(componentInstance);

//         return res.send(
//             htmlData.replace(
//                 '<div id="root"></div>',
//                 `<div id="root">${html}</div>`
//             )
//         );
//     });
// }