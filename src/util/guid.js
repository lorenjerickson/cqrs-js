/**
 * Created with JetBrains WebStorm.
 * User: A239597
 * Date: 4/26/12
 * Time: 12:20 PM
 * To change this template use File | Settings | File Templates.
 */

exports.generate = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    });
};
