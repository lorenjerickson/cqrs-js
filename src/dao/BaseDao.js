/**
 * Created with JetBrains WebStorm.
 * User: A239597
 * Date: 4/26/12
 * Time: 12:54 PM
 * To change this template use File | Settings | File Templates.
 */

var Class = require('../util/class'),
    mongo = require('mongodb');

var BaseDao = Class.extend({
    init: function(database_name, collection_name) {
        var self = this;
        var db = new mongo.db(database_name, {native_parser: false, auto_reconnect:true}, {});
        this.collection = null;
        db.collection(collection_name, function(err, coll) {
            if (err) throw err;
            self.collection = coll;
        });
    },
    retrieve: function(id) {
        if (this.collection) {
            collection.find({id:id}, function(err, cursor) {
                if (err) throw err;
                cursor.toArray(function(err, objs) {
                    if (err) throw err;
                    if (objs.length > 1) {
                        throw new Error('Identity collision: two or more entities have the same id');
                    } else if (objs.length == 0) {
                        throw new Error('Invalid identity: no entity found with the given id');
                    } else {
                        return objs[0];
                    }
                });
            });
        } else {
            throw new Error('Cannot retrieve a document when not initialized');
        }
    },
    create: function(obj) {
        if (this.collection) {
            this.collection.insert(obj, {safe:true}, function(err, result) {
                if (err) throw err;
                // TODO what else here?
            });
        } else {
            throw new Error('Cannot create a document when not initialized');
        }
    },
    update: function(newObj) {
        if (this.collection) {
            this.collection.update({id:newObj.id}, newObj, {safe:true}, function(err, result) {
                if (err) throw err;
                // TODO what else here?
            });
        } else {
            throw new Error('Cannot update a document when not initialized');
        }
    },
    remove: function(obj) {
        if (this.collection) {
            this.collection.remove({id:obj.id}, {safe:true}, function(err, result) {
                if (err) throw err;
                // TODO what else here?
            });
        } else {
            throw new Error('Cannot remove a document when not initialized');
        }
    }
});
