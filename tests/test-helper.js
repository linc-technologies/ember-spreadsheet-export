import Application from '@linc-technologies/ember-spreadsheet-export/app';
import config from '@linc-technologies/ember-spreadsheet-export/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
