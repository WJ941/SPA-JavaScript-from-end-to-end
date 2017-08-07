/*
 * spa.chat.js
 * Chat feature module for SPA
*/
/* jslint            browser : true,   continue : true,
   devel  : ture,     indent : 2,        maxerr : 50,
   newcap : true,      nomen : true,   plusplus : true,
   regexp : true,     sloppy : true,       vars : false,
   white  : true
*/
/*global $,spa */

spa.chat = (function () {

 //-----------------BEGIN MODULE SCOPE VARIABLES-------------
  var 
    configMap = {
      main_html : `
      <div style="padding:1em; color:#fff;">
        say hello to chat
      <\/div>
      `,
      settable_map: {}
  },
  stateMap = { $container : null },
  jqueryMap = {},
  setJqueryMap, configModule, initModule
  ;
//-------------EDN MODULE SCOPE VARIABLES-------------------

//-------------BEGIN UTILITY METHODS------------------------
//-------------END UTILITY METHODS--------------------------

//-------------BEGIN DOM METHODS----------------------------
// Begin DOM method /setJqueryMap/
    setJqueryMap = function () {
      var $container = stateMap.$container;
      jqueryMap = { $container : $container };
    };
// End DOM method / setJqueryMap/
// -------------End DOM method------------------------------

//--------------BEGIN EVENT HANDLES-------------------------
//--------------END EVENT HANDLES---------------------------

//-------------BEGIN PUBLIC METHODS------------------------
// Begin public method / configModule/
  configModule = function ( input_map ) {
    spa.util.setConfigMap({
      input_map    : input_map,
      settable_map : configMap.settable_map,
      config_map   : configMap
    });
  }
// End public method / configModule/
// Begin public method / initModule/
  initModule = function ( $container ) {
    $container.html( configMap.main_html );
    stateMap.$container = $container;
    setJqueryMap();
    return true;
  }
// End public method / initModule/
  return {
    configModule : configModule,
    initModule : initModule,
  };
    //------------EDN PUBLIC METHODS---------------
} () );