const items = {
  firestorePath: 'items',
  firestoreRefType: 'collection', // or 'doc'
  moduleName: 'items',
  statePropName: 'data',
  namespaced: true, // automatically added

  // this object is your store module (will be added as '/items')
  // you can also add state/getters/mutations/actions
}

export default items