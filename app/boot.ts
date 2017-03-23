import {} from 'angular2/core';

import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {bootstrap}  from 'angular2/platform/browser'
import {SimpleComponent} from './simple.component'
 
bootstrap(SimpleComponent,[HTTP_PROVIDERS]);