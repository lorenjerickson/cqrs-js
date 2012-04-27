/**
 * Created with JetBrains WebStorm.
 * User: a239597
 * Date: 4/27/12
 * Time: 3:36 PM
 * To change this template use File | Settings | File Templates.
 */

var BaseEvent = require('./BaseEvent.js');

var CompletedChangedEvent = BaseEvent.extend({
    init: function(id, completed) {
        this._super();
        this.id = id;
        this.completed = completed;
    }
});
