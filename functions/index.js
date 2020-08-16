const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)

exports.createUser = functions.firestore.document('users/{id}').onCreate((snap, context) => {
  snap.ref.set({
  	active: false,
  	admin: false,
  	img: '',
  }, { merge: true })
})
