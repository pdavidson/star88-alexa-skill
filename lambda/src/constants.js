"use strict";

module.exports = Object.freeze({

    appId : 'amzn1.ask.skill.a19d2a5c-2a12-4d16-8ad5-880bbee8bd93',

    // when true, the skill logs additional detail, including the full request received from Alexa
    debug : false

    // when defined, it tries to read / write DynamoDB to save the last time Jingle was played for that user
    // this allows to avoid to repaet the jingle at each invocation 
    // jingle : {
    //     databaseTable : "my_radio",
    //     //playOnceEvery : 1 * 60 * 60 * 24 // 24 hours
    //     playOnceEvery : 1 * 60 * 3 // 3 minutes
    // }

});
