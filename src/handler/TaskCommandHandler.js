/**
 * Created with JetBrains WebStorm.
 * User: a239597
 * Date: 4/27/12
 * Time: 2:41 PM
 * To change this template use File | Settings | File Templates.
 */

var BaseCommandHandler = require('./BaseCommandHandler.js'),
    TaskRepository = require('../repository/TaskRepository.js'),
    Task = require('../domain/Task.js');

var TaskCommandHandler = BaseCommandHandler.extend({
    init: function() {
        this.repository = new TaskRepository();
    },
    handle: function(command) {
        switch(command.commandName) {
            case 'ChangeName':
                this.handleChangeName(command);
                break;
            case 'ChangeComments':
                this.handleChangeComments(command);
                break;
            case 'ChangeDueDate':
                this.handleChangeDueDate(command);
                break;
            case 'ChangeCompleted':
                this.handleChangeCompleted(command);
                break;
            case 'Create':
                this.handleCreate(command);
                break;
        }
    },
    handleChangeName: function(command) {
        var task = this.repository.getById(command.id);
        task.changeName(command.name);
        this.repository.save(task, command.expectedVersion);
    },
    handleChangeComments: function(command) {
        var task = this.repository.getById(command.id);
        task.changeComments(command.comments);
        this.repository.save(task, command.expectedVersion);
    },
    handleChangeDueDate: function(command) {
        var task = this.repository.getById(command.id);
        task.changeDueDate(command.dueDate);
        this.repository.save(task, command.expectedVersion);
    },
    handleChangeCompleted: function(command) {
        var task = this.repository.getById(command.id);
        task.changeCompleted(command.completed);
        this.repository.save(task, command.expectedVersion);
    },
    handleCreate: function(command) {
        var task = new Task(command.name, command.comments,command.dueDate);
        this.repository.save(task, -1);
    }
});