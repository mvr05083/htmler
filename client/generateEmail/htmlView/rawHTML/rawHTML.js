Template.rawHTML.helpers({
  'elements' : function(){
    return Elements.find({}, {
      sort: {
        rank: 1
      }
    });
  }
})
