'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
var map = require('broccoli-stew').map;

module.exports = {
  name: 'ember-cli-csv',

	treeForVendor(defaultTree) {
 		var browserVendorLib = new Funnel(path.join('./vendor'), { files: ['Blob.js', 'FileSaver-1.3.3.js', 'jszip-0.10.8.js' ] });
    browserVendorLib = map(browserVendorLib, (content) => `if (typeof FastBoot === 'undefined') { ${content} }` );
    return new MergeTrees([defaultTree, browserVendorLib], { overwrite: true });
	},

  included(app) {
  	this._super.included(app);
    app.import('vendor/Blob.js');
    app.import('vendor/FileSaver-1.3.3.js');
		app.import('vendor/jszip-0.10.8.js');
  },

  isDevelopingAddon() {
    return true;
  }
};
