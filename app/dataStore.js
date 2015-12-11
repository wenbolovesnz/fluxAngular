class DataStore {
  constructor ($rootScope, constants) {
    'ngInject';
    this.constants = constants;
    this.$scope = $rootScope;

    this.user = {
      username: 'Owen Goodman',
      age: '29',
      loggedIn: true
    };
  }


  newEvent(eventType, eventData){
    switch(eventType) {
      case this.constants.actionTypes().LOGIN:
        this.handleLogin();
        break;
      case this.constants.actionTypes().CHANGE_NAME:
        this.handleChangeName(eventData);
        break;
      case this.constants.actionTypes().LOGOUT:
        this.handleLogout(eventData);
        break;
    }
  }

  handleLogin(){
    this.$scope.$broadcast('dataReady', this.user);
  }

  handleChangeName(eventData){
    this.user.username = eventData;
    this.$scope.$broadcast('dataReady', this.user);
  }

  handleLogout(){
    this.$scope.$broadcast('dataReady', {});
  }


}

export default DataStore;
