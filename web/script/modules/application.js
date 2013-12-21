/**
 * Created by zhang on 20/12/2013.
 */

console.log('application start');

var fileloader = document.getElementById('files');

fileloader.addEventListener(Modules.FileLoader.EVENT_TYPE, Modules.FileLoader.LoadHandler, false);

fileloader.addEventListener('change', function(eve) {

  console.log('change');

  var event = new CustomEvent(Modules.FileLoader.EVENT_TYPE, {
    detail: {
      files: eve.target.files,
      parser: function(content) {

        //console.log(content);
      }
    }
  });

  fileloader.dispatchEvent(event);

}, false);