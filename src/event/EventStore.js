/**
 * Created with JetBrains WebStorm.
 * User: A239597
 * Date: 4/26/12
 * Time: 12:58 PM
 * To change this template use File | Settings | File Templates.
 */

var Class = require('../util/class'),
    EventPublisher = require('./EventPublisher'),
    EventDao = require('../dao/EventDao'),
    EventDescriptor = require('./EventDescriptor'),
    _ = require('../../node_modules/underscore');

var EventStore = Class.extend({
    init: function() {
        this.dao = new EventDao();
        this.publisher = new EventPublisher();
    },
    getEventsForAggregateId: function(id) {
        var aggregate = this.dao.retrieve(id);
        if (aggregate) {
            return aggregate.events;
        } else {
            throw new Error('Invalid identity: no entity exists for the given id');
        }
    },
    saveEvents: function(id, events, expectedVersion) {
        var aggregate = this.dao.retrieve(id);
        if (!aggregate) {
            aggregate = {id:id, events:[]};
            this.dao.create(aggregate);
        } else if (aggregate.events[aggregate.events.length-1].version != expectedVersion && expectedVersion != -1) {
            throw new Error('Concurrency error: expected entity version does not match actual version');
        }

        var version = expectedVersion;
        _.each(events, function(event) {
            version++;
            aggregate.events.push(new EventDescriptor(id, event, version));
            this.publisher.publish(event);
        });

        this.dao.update(aggregate);
    }
});
