class Actions {
  constructor (constants, dataStore) {
    'ngInject';
    this.dataStore = dataStore;
    this.constants = constants;
  }

  loginAction (){
    this.dataStore.newEvent(this.constants.actionTypes().LOGIN);
  }

  changeNameAction(newName){
    this.dataStore.newEvent(this.constants.actionTypes().LOGIN, newName);
  }

  logoutAction(newName){
    this.dataStore.newEvent(this.constants.actionTypes().LOGOUT, newName);
  }
}

export default Actions;
