/**
 * Created with JetBrains WebStorm.
 * User: a239597
 * Date: 4/27/12
 * Time: 2:29 PM
 * To change this template use File | Settings | File Templates.
 */

var BaseCommand = require('./BaseCommand.js');

var ChangeNameCommand = BaseCommand.extend({
    init: function(id, name) {
        this.id = id;
        this.dueDate = name;
    }
});
