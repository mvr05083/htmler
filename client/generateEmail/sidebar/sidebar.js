Template.sidebar.helpers({
  'elements': function() {
    return Elements.find({}, {
      sort: {
        rank: 1
      }
    })
  }
});

Template.sidebar.events({
  'blur textarea': function(e, t) {
    console.log(this._id);
    console.log(e.target.value);
    Meteor.call('updateText', this._id, e.target.value);
  }
});

// Drag and drop
Template.sidebar.onRendered(function() {
  this.$('#items').sortable({
    stop: function(e, ui) {
      el = ui.item.get(0)
      before = ui.item.prev().get(0)
      after = ui.item.next().get(0)

      if (!before) {
        newRank = Blaze.getData(after).rank - 1
      } else if (!after) {
        newRank = Blaze.getData(before).rank + 1
      } else {
        newRank = (Blaze.getData(after).rank + Blaze.getData(before).rank) / 2
      }

      Elements.update({
        _id: Blaze.getData(el)._id
      }, {
        $set: {
          rank: newRank
        }
      })
    }
  })
});
