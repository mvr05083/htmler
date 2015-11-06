Template.addNewElementModal.events({
  'submit form': function(e, t) {
    e.preventDefault();
    console.log(e.target.htmlType.value);
    Meteor.call('generateHtmlEntity', e.target.htmlType.value);
  }
});
