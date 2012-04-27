/**
 * Created with JetBrains WebStorm.
 * User: a239597
 * Date: 4/27/12
 * Time: 11:32 AM
 * To change this template use File | Settings | File Templates.
 */

var AggregateRoot = require('./AggregateRoot.js'),
    guid = require('../util/guid.js'),
    NameChangedEvent = require('../event/NameChangedEvent.js'),
    DueDateChangedEvent = require('../event/DueDateChangedEvent.js'),
    CompletedChangedEvent = require('../event/CompletedChangedEvent.js'),
    CommentsChangedEvent = require('../event/CommentsChangedEvent.js');

var Task = AggregateRoot.extend({
    init: function(name, comments, dueDate) {
        // id has to be established first
        var changes = [
            new TaskCreatedEvent(guid.generate())
        ];
        this._super.applyChanges(changes);

        changes = [
            new NameChangedEvent(this.id, name),
            new CommentsChangedEvent(this.id, comments),
            new DueDateChangedEvent(this.id, dueDate),
            new CompletedChangedEvent(this.id, false)
        ];
        this._super.applyChanges(changes);
    },
    changeName: function(name) {
        // TODO validate this.id
        this._super.applyChange(new NameChangedEvent(this.id, name));
    },
    changeComments: function(comments) {
        this._super.applyChange(new CommentsChangedEvent(this.id, comments));
    },
    changeDueDate: function(dueDate) {
        this._super.applyChange(new DueDateChangedEvent(this.id, dueDate));
    },
    changeComplete: function(completed) {
        this._super.applyChange(new CompletedChangedEvent(this.id, completed));
    }
});
