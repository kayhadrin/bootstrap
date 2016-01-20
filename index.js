var moduleVersion = '%version%'; // will be updated by a grunt task

if (moduleVersion === '%' + 'version' + '%') { // useful for local testing before npm packaging
  require('./dist/ui-bootstrap-tpls-' + require('./package.json').version);
} else {
  require('./dist/ui-bootstrap-tpls-%version%'); // will be updated by a grunt task
}

module.exports = 'ui.bootstrap';
