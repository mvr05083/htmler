Template.preview.helpers({
  'elements' : function(){
    return Elements.find({}, {
      sort: {
        rank: 1
      }
    });
  }
});
