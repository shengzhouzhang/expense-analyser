/**
 * Created by zhang on 20/12/2013.
 */

Modules.FileLoader = {};

Modules.FileLoader._check = function() {

  var result = false;

  if (window.File && window.FileReader && window.FileList && window.Blob) {

     result = true;
  }

  Modules.Assert.assert(result);
};

Modules.FileLoader.load = function(file, parser) {

  var reader, content;

  this._check();

  Modules.Assert.assert(file instanceof File);
  Modules.Assert.assert(parser instanceof Function);

  reader = new FileReader();

  reader.onloadend = function(event) {

    content = event.target.result;
    parser(content);
  };

  reader.readAsText(file);
};

Modules.FileLoader.EVENT_TYPE = "LOAD_FILES";

Modules.FileLoader.LoadHandler = function(event) {

  var i, length, data = event.detail, files = data.files;

  console.log(event);
  Modules.Assert.assert(event instanceof Event);

  for(i = 0, length = files.length; i < length; i++) {

    Modules.FileLoader.load(files[i], data.parser);
  }
};