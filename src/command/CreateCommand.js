/**
 * Created with JetBrains WebStorm.
 * User: a239597
 * Date: 4/27/12
 * Time: 2:43 PM
 * To change this template use File | Settings | File Templates.
 */

var BaseCommand = require('./BaseCommand.js');

var CreateCommand = BaseCommand.extend({
    init: function(id, name, comments, dueDate) {
        this._super('Create');
        this.id = id;
        this.dueDate = dueDate;
        this.comments = comments;
        this.name = name;
    }
});
