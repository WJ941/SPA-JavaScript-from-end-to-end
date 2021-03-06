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
/*global $,spa, getComputedStyle  */

spa.chat = (function () {

 //-----------------BEGIN MODULE SCOPE VARIABLES-------------
  var 
    configMap = {
      main_html : `
      <div class="spa-chat">
        <div class="spa-chat-head">
          <div class="spa-chat-head-toggle">+</div>
          <div class="spa-chat-head-title">Chat</div>
        </div>
        <div class="spa-chat-closer">x</div>
        <div class="spa-chat-sizer">
          <div class="spa-chat-msgs"></div>
          <div class="spa-chat-box">
            <input type=["text"]/>
            <div>send</div>
          </div>
        </div>  
        say hello to chat
      <\/div>
      `,
      settable_map: {
        slider_open_time    : true,
        slider_close_time   : true,
        slider_opened_em    : true,
        slider_closed_em    : true,
        slider_opened_title : true,
        slider_closed_title : true,

        chat_model          : true,
        people_model        : true,
        set_chat_anchor     : true
      },

      slider_open_time      : 250,
      slider_close_time     : 250,
      slider_opened_em      : 16,
      slider_closed_em      : 2,
      slider_opened_title   : 'Click to close',
      slider_closed_title   : 'Click to open',

      chat_model            : null,
      people_model          : null,
      set_chat_anchor       : null
  },
  stateMap = { 
    $append_target   : null,
    position_type    : 'closed',
    px_per_em        : 0,
    slider_hidden_px : 0,
    slider_closed_px : 0,
    slider_opened_px : 0
  },
  jqueryMap = {},
  setJqueryMap, getEmSize, setPxSizes, setSliderPositions,onClickToggle, configModule, initModule
  ;
//-------------EDN MODULE SCOPE VARIABLES-------------------

//-------------BEGIN UTILITY METHODS------------------------
getEmSize = function ( elem ) {
  return Number(
    getComputedStyle( elem, '').fontSize.match(/\d*\.?\d*/)[0]
  );
}
//-------------END UTILITY METHODS--------------------------

//-------------BEGIN DOM METHODS----------------------------
// Begin DOM method /setJqueryMap/
    setJqueryMap = function () {
      var 
        $append_target = stateMap.$append_target,
        $slider = $append_target.find(".spa-chat");
      
      jqueryMap = {
        $slider : $slider,
        $head   : $slider.find( '.spa-chat-head' ),
        $toggle : $slider.find( '.spa-chat-toggle' ),
        $title  : $slider.find( '.spa-chat-title' ),
        $sizer  : $slider.find( '.spa-chat-sizer' ),
        $msgs   : $slider.find( '.spa-chat-msgs' ),
        $box    : $slider.find( '.spa-chat-box' ),
        $input  : $slider.find( '.spa-chat-input input[type=text]')
      };
    };
// End DOM method / setJqueryMap/
// Begin DOM method /setPxsizes/
setPxSizes = function () {
  
};
// End DOM method /setPxsizes/
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