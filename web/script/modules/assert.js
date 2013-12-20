/**
 * Created by zhang on 20/12/2013.
 */

Modules.Assert = {};

Modules.Assert.assert = function (value1, value2) {

  if (value1 !== (value2 === undefined ? true : value2)) {

    throw {name:'terminate-program', message:'Assert Failed!'};
  }
};