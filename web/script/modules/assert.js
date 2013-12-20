/**
 * Created by zhang on 20/12/2013.
 */

Modules.Assert = {};

Modules.Assert.assert = function (value1, value2) {

  if (value2 === undefined) {
    value2 = true;
  }

  if (value1 !== value2) {
    throw {name:'terminate-program', message:'Assert Failed!'};
  }
};