/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';
import GithubContributorService from '../app/components/githubContributor/githubContributor.service';
import WebDevTecService from '../app/components/webDevTec/webDevTec.service';
import NavbarDirective from '../app/components/navbar/navbar.directive';
import MalarkeyDirective from '../app/components/malarkey/malarkey.directive';
import Constants from '../app/constants';
import DataStore from '../app/dataStore';
import Actions from '../app/action/action';

angular.module('lostAndFound', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
  .constant('malarkey', malarkey)
  .constant('toastr', toastr)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('constants', Constants)
  .service('actions', Actions)
  .service('dataStore', DataStore)
  .controller('MainController', MainController)
  .directive('acmeNavbar', () => new NavbarDirective())
  .directive('acmeMalarkey', () => new MalarkeyDirective(malarkey));
