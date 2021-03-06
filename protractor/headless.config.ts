import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 1000,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu'],
    },
  },
  SELENIUM_PROMISE_MANAGER: true,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  },
};
