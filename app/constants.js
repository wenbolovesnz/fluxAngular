class Constants {
  constructor () {
    'ngInject';
  }

  actionTypes(){
    return{
      'LOGIN': 'LOGIN',
      'CHANGE_NAME': 'CHANGE_NAME',
      'LOGOUT': 'LOGOUT'
    };
  }
}

export default Constants;
