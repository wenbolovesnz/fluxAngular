class MainController {
  constructor ($rootScope) {
    'ngInject';
    this.user = {};
    $rootScope.$on('dataReady', (event, data) => {
      this.onDataReady(event, data);
    });
  }

  onDataReady(event, data){
    this.user = data;
  }
}

export default MainController;
