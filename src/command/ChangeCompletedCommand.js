/**
 * Created with JetBrains WebStorm.
 * User: a239597
 * Date: 4/27/12
 * Time: 2:30 PM
 * To change this template use File | Settings | File Templates.
 */

var BaseCommand = require('./BaseCommand.js');

var ChangeCompletedCommand = BaseCommand.extend({
    init: function(id, completed) {
        this._super('ChangeCompleted');
        this.id = id;
        this.completed = completed;
    }
});
