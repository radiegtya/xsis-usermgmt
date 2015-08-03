/**
 * This Code was created on April 2014
 * If you find any bug, unreadable code, messy code, potential bug code, etc
 * Please contact me at:
 * Ega Radiegtya / radiegtya@yahoo.co.id / 085641278479
 *
 * Update April 2015  Martin Bramwell
 *    changed it to import values from settings.json
 */

/*
 * These are standard settings for first-time users who might run the
 * meteor command without --settings=settings.json
 *
*/

if (Meteor.settings                                 == undefined)
    Meteor.settings                                 = {};

if (Meteor.settings.public                          == undefined)
    Meteor.settings.public                          = {};

if (Meteor.settings.public.PRODUCTION               == undefined)
    Meteor.settings.public.PRODUCTION               = false;

if (Meteor.settings.public.APP_VERSION              == undefined)
    Meteor.settings.public.APP_VERSION              = "0.9.8.05";

if (Meteor.settings.public.APP_ID                   == undefined)
    Meteor.settings.public.APP_ID                   = "73xWmYM6nKmMa5ERB";

if (Meteor.settings.public.APP_NAME                 == undefined)
    Meteor.settings.public.APP_NAME                 = "Xsis User Management";

if (Meteor.settings.public.USE_MUGEN_GENERATOR      == undefined)
    Meteor.settings.public.USE_MUGEN_GENERATOR      = true;

if (Meteor.settings.public.DEVELOPMENT_MAIN_SERVER  == undefined)
    Meteor.settings.public.DEVELOPMENT_MAIN_SERVER  = "http://localhost:3000";

/*
 * These settings vary according to whether it is a production or development run
 */
var MONGO_URL = "";
var APP_SERVER_URL = "";
var ACTIVATE_MUGEN = false;
var DEFAULT_LANGUAGE="en";

if (Meteor.settings.public.PRODUCTION) {
    MONGO_URL = Meteor.settings.PRODUCTION_MONGO_SERVER;
    APP_SERVER_URL = Meteor.settings.public.PRODUCTION_MAIN_SERVER;
} else {
    MONGO_URL = Meteor.settings.DEVELOPMENT_MONGO_SERVER;
    APP_SERVER_URL = Meteor.settings.public.DEVELOPMENT_MAIN_SERVER;

    ACTIVATE_MUGEN = Meteor.settings.public.USE_MUGEN_GENERATOR;
}

/*
 * This **Optional** setting permits storing
 * oversize files in a separate database
 * the default value is same with MONGO_URL
 */
var BLOB_URL = MONGO_URL;
if (Meteor.settings.BLOB_MONGO_SERVER != undefined) {
  BLOB_URL = Meteor.settings.BLOB_MONGO_SERVER;
}

/*
 * Global settings variable is now instantiated
 */
App = {
    id:             Meteor.settings.public.APP_ID,
    name:           Meteor.settings.public.APP_NAME,
    version:        Meteor.settings.public.APP_VERSION,
    defaultLanguage:DEFAULT_LANGUAGE,
    baseUrl:        APP_SERVER_URL,        //  baseUrl:       your application server hosting IP address
    mongoUrl:       MONGO_URL,             //  mongoUrl:      your database hosting IP address
    mongoBlobUrl:   BLOB_URL,              //  mongoBlobUrl:  your BLOB database hosting IP address
    activateMugen:  ACTIVATE_MUGEN        //  activateMugen: normally false for production
};

/**
 * Global helper routine for easy access to these system settings
 */
UI.registerHelper('app', function(option, value) {
    return App[option];
});

