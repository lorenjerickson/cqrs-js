/**
 * Created with JetBrains WebStorm.
 * User: A239597
 * Date: 4/26/12
 * Time: 12:19 PM
 * To change this template use File | Settings | File Templates.
 */

var Class = require('../util/class'),
    _ = require('underscore'),
    guid = require('../util/guid');

var AggregateRoot = Class.extend({
    init: function() {
        this.changes = [];
    },
    create: function() {
        this.id = guid.generate();
    },
    applyChange: function(event) {
        this.applyChangeInternal(event, true);
    },
    applyChangeInternal: function(event, isNew) {
        this[event.field] = event.value;
        if (isNew) {
            this.changes.push(event);
        }
    },
    applyChanges: function(changes) {
        _.each(changes, function(change) {
            this.applyChangeInternal(change, true);
        });
    },
    commitChanges: function() {
        _changes = [];
    },
    uncommittedChanges: function() {
        return _changes;
    },
    loadFromHistory: function(events) {
        _.each(events, function(event) {
            this.applyChangeInternal(event, false);
        });
    }
});
