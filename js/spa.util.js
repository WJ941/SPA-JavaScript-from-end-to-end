/*
 * spa.util.js
 * General JavaScript utilities
*/
/* jslint            browser : true,   continue : true,
   devel  : ture,     indent : 2,        maxerr : 50,
   newcap : true,      nomen : true,   plusplus : true,
   regexp : true,     sloppy : true,       vars : false,
   white  : true
*/
/*global $,spa */
spa.util = (function () {
  var makeError, setConfigMap;

// Begin public constructor /makeError/
  makeError = function ( name_text, msg_text,data ) {
    var error = new Error();
    error.name = name_text;
    error.message = msg_text;
    if ( data ) { error.data = data; }
    return error;
  }

// End public constructor /makeError/
// Purpose: common code to set configs in feature modules
// Arguments:
// * input_map      - map of key-values to set in config
// * settable_map   - map of allowable keys to set
// * config_map     - map to apply settings to
// Returns: true
// Throws: Exceptions if input key not allowed
//
// Begin public constructor /setConfigMap/
  setConfigMap = function ( arg_map ){
    var
      input_map     = arg_map.input_map,
      settable_map  = arg_map.settable_map,
      config_map    = arg_map.config_map,
      key_name, error;

      for ( key_name in input_map ){
        if ( input_map.hasOwnProperty( key_name ) ){
          if( settable_map.hasOwnProperty( key_name ) ){
            config_map[ key_name ] = input_map[ key_name ];
          }
          else {
            error = makeError( 'Bad Input',
              'Setting config key |'+ key_name + '| is not supported'
            );
            throw( error );
          }
        }
      }
  };
// End public constructor /setConfigMap/

  return {
    makeError    : makeError,
    setConfigMap : setConfigMap 
  };

}());