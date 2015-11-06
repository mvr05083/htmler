Meteor.methods({
  'updateText': function(id, text) {
    Elements.update({
      _id: id
    }, {
      $set: {
        htmlBody: text
      }
    });
  }
});
