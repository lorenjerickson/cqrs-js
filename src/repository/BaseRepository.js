/**
 * Created with JetBrains WebStorm.
 * User: A239597
 * Date: 4/26/12
 * Time: 12:50 PM
 * To change this template use File | Settings | File Templates.
 */

var Class = require('../util/class'),
    EventStore = require('../event/EventStore');

var BaseRepository = Class.extend({
    init: function() {
        this.eventStore = new EventStore();
    },
    getById: function(id) {

    },
    save: function(aggregate, expectedVersion) {
        this.eventStore.saveEvents(aggregate.id, aggregate.events, expectedVersion);
    }
});
