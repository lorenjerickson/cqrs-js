/**
 * Created with JetBrains WebStorm.
 * User: A239597
 * Date: 4/26/12
 * Time: 4:06 PM
 * To change this template use File | Settings | File Templates.
 */

var Class = require('../util/class');

var EventDescriptor = Class.extend({
    init: function(id, event, version) {
        this.id = id;
        this.event = event;
        this.version = version;
    }
});