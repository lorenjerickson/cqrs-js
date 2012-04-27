/**
 * Created with JetBrains WebStorm.
 * User: A239597
 * Date: 4/26/12
 * Time: 3:56 PM
 * To change this template use File | Settings | File Templates.
 */

var BaseDao = require('./BaseDao');

var ModelDao = BaseDao.extend({
    init: function() {
        this._super('tasks', 'events');
    }
});
