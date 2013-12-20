/**
 * Created by zhang on 20/12/2013.
 */

Modules.FileLoader = {};


Modules.FileLoader._check = function() {

  var result = false;

  if (window.File && window.FileReader && window.FileList && window.Blob) {

     result = true;
  }

  Modules.Assert.assert(result, true);
};

Modules.FileLoader.load = function(file, callback) {

  var reader, content;

  this._check();

  reader = new FileReader();

  reader.onloadend = function(event) {

    content = event.target.result;

    callback(content);
  };

  reader.readAsText(file);
};

Modules.FileLoader.LoadHandler = function(event) {

  var files = event.target.files;

  if (files.length > 0) {

    Modules.FileLoader.load(files[0], function(){});
  }
};

document.getElementById('files').addEventListener('change', Modules.FileLoader.LoadHandler, false);