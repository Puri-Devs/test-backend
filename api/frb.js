const express = require('express');
const router = express.Router();
const firebase_adm = require('firebase-admin')
const bodyParser = require('body-parser');

const serviceAccount = require('./config.json');

firebase_adm.initializeApp({
  credential: firebase_adm.credential.cert(serviceAccount),
  databaseURL: 'https://login-with-googg.appspot.com'
});

const adm = firebase_adm.auth()

function verify(idToken) {
  return adm.verifyIdToken(idToken);
}

router.use(bodyParser.urlencoded({ extended: false })); // for Support POST body

// Login with Google
router.post('/ext-users', (req, res) => {
  // console.log(req.body)
  const idToken = req.body.idToken;
  verify(idToken)
    .then((decodedToken) => {
    //   console.log(decodedToken)
      const name = decodedToken.name;
      const uid = decodedToken.uid;
      const email = decodedToken.email;
      const pic = decodedToken.picture;
      const provider = decodedToken.firebase.sign_in_provider
      let exportData = {
        provider: provider,
        usr: name,
        id: uid,
        email: email,
        picture: pic,
      }
    //   console.log(exportData)
      console.log("=======================")
      console.log("New User Authentication")
      console.log(`From: ${provider}`)
      console.log(`Name: ${name}`)
      console.log(`Email: ${email}`)
      console.log("=======================")
      // Send response to client
      res.status(200).send(exportData);

      return ""
    })
    .catch((error) => {
      console.error(error);
      // ISE - Internal Server Error
      res.status(500).send('ISE: Invalid Token');
    });
});

module.exports = router;
