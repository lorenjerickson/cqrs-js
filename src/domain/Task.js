/**
 * Created with JetBrains WebStorm.
 * User: a239597
 * Date: 4/27/12
 * Time: 11:32 AM
 * To change this template use File | Settings | File Templates.
 */

var AggregateRoot = require('./AggregateRoot.js'),
    guid = require('../util/guid.js');

var Task = AggregateRoot.extend({
    init: function(name, comments, dueDate) {
        this.id = guid.generate();
        this.name = name;
        this.comments = comments;
        this.dueDate = dueDate;
        this.complete = false;
    },
    changeName: function(newName) {
        this._super.applyChange({field:'name', value:newName});
    },
    changeDescription: function(newDescription) {
        this._super.applyChange({field:'description', value:newDescription});
    },
    changeDueDate: function(newDueDate) {
        this._super.applyChange({field:'dueDate', value:newDueDate});
    },
    changeComplete: function(state) {
        this._super.applyChange({field:'complete', value:state});
    }
});