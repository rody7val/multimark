const users = {
  firestorePath: 'users',
  firestoreRefType: 'collection', // or 'doc'
  moduleName: 'users',
  statePropName: 'data',
  namespaced: true, // automatically added

  // this object is your store module (will be added as '/users')
  // you can also add state/getters/mutations/actions
}

export default users