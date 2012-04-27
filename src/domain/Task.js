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
        var changes = [
            {field:'id', value:guid.generate()},
            {field:'name', value:name},
            {field:'comments', value:comments},
            {field:'dueDate', value:dueDate},
            {field:'completed', value:false}
        ];
        this._super.applyChanges(changes);
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
