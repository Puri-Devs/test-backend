const authRoutes = require('./api/frb');

const cors = require('cors')
const express = require('express')
const app = express();

function srv(functionName){

    const port = 80;
    const routerBasePath = process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}/`

    app.use('/auth', authRoutes);

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/api/example/get-token.html');
    });

//     app.listen(port, () => {
//         console.log(`Firebase Server API on port: ${port}`)
//     })

    // Setup routes
    app.use(routerBasePath, authRoutes)

    // Apply express middlewares
    authRoutes.use(cors())
    return app

}

module.exports = srv
