import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createTodo: function () {
      var title = this.get('newTitle').trim();
      if (!title) { return; }

      var todo = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      this.set('newTitle', '');

      todo.save();
    }
  }
});
