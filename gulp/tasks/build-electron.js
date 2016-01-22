var fs = require('fs');
var config = require('../config');

exports.task = function() {
  //TODO (devversion): This needs to massively improved
  var pkgObject = JSON.parse(fs.readFileSync(config.pkgPath).toString());
  pkgObject.main = config.electronEntryFile;
  fs.writeFileSync(config.outputDir + 'package.json', JSON.stringify(pkgObject, null, 2));
};