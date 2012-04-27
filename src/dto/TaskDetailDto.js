/**
 * Created with JetBrains WebStorm.
 * User: a239597
 * Date: 4/27/12
 * Time: 3:34 PM
 * To change this template use File | Settings | File Templates.
 */


var BaseDto = require('./BasetDto.js');

var TaskDetailDto = BaseDto.extend({
    init: function(id, name, comments, dueDate, completed) {
        this.id = id;
        this.name = name;
        this.comments = comments;
        this.dueDate = dueDate;
        this.completed = completed;
    }
});
