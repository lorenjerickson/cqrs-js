/**
 * Created with JetBrains WebStorm.
 * User: a239597
 * Date: 4/27/12
 * Time: 3:07 PM
 * To change this template use File | Settings | File Templates.
 */

var Class = require('../util/class.js'),
    TaskCommandHandler = require('../handler/TaskCommandHandler.js'),
    EventPublisher = require('../eventstore/EventPublisher.js');

var CommandEventBus = Class.extend({
    init: function() {
        this.handler = new TaskCommandHandler();
        this.publisher = new EventPublisher();
    },
    send: function(command) {
        this.handler.handle(command);
    },
    publish: function(event) {
        this.publisher.publish(event);
    }
});
