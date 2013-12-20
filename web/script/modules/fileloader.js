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

Modules.FileLoader.Load = function() {

  this._check();


};