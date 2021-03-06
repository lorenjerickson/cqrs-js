/**
 * Created with JetBrains WebStorm.
 * User: a239597
 * Date: 4/27/12
 * Time: 2:29 PM
 * To change this template use File | Settings | File Templates.
 */

var BaseCommand = require('./BaseCommand.js');

var ChangeNameCommand = BaseCommand.extend({
    init: function(id, name, expectedVersion) {
        this._super('ChangeName');
        this.id = id;
        this.name = name;
        this.expectedVersion = expectedVersion;
    }
});
