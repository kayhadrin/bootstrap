var packageConf = require('./package.json');

require('./dist/ui-bootstrap-tpls-' + packageConf.version);
module.exports = 'ui.bootstrap';
