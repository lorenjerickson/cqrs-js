/**
 * Created with JetBrains WebStorm.
 * User: a239597
 * Date: 4/27/12
 * Time: 2:45 PM
 * To change this template use File | Settings | File Templates.
 */

var BaseRepository = require('./BaseRepository.js'),
    Task = require('../domain/Task.js');

var TaskRepository = BaseRepository.extend({
    init: function() {

    },
    getById: function(id) {
        var task = new Task();
        var events = this._super.eventStore.getEventsForAggregateId(id);
        task._super.loadFromHistory(events);
        return task;
    },
    save: function(task, expectedVersion) {
        this._super.save(task, expectedVersion);
    }
});
