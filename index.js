var moduleVersion = '%version%'; // will be updated by a grunt task

if (moduleVersion === '%' + 'version' + '%') { // useful for local testing before npm packaging
  require('./dist/ui-bootstrap-tpls-' + require('./package.json').version);
} else {
  // note: at that time, this file will run from the ./dist folder
  // will be updated by a grunt task
  require('./ui-bootstrap-tpls-%version%');
}

module.exports = 'ui.bootstrap';
