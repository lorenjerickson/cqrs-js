/**
 * Created with JetBrains WebStorm.
 * User: a239597
 * Date: 4/27/12
 * Time: 3:31 PM
 * To change this template use File | Settings | File Templates.
 */

var BaseDto = require('./BasetDto.js');

var TaskSummaryDto = BaseDto.extend({
    init: function(id, name, completed) {
        this.id = id;
        this.name = name;
        this.completed = completed;
    }
});
