class NavbarDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class NavbarController {
  constructor (actions, $rootScope) {
    'ngInject';
    this.actions = actions;
    this.user = {};
    $rootScope.$on('dataReady', (event, data) => {
      this.onDataReady(event, data);
    });
  }

  login() {
    this.actions.loginAction();
  }

  logout(){
    this.actions.logoutAction();
  }

  onDataReady(event, data){
    this.user = data;
  }
}

export default NavbarDirective;
