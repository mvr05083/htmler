Meteor.methods({
  generateHtmlEntity: function(type) {
    let highValue = 1;
    let defaultComment = 'I am a little comment to keep you happy!';
    let htmlValue = '';
    let tableElements = '';

    if (Elements.find({}).count() > 0) {
      highValue = Elements.findOne({
        $query: {},
        $orderby: {
          number: -1
        }
      }).number + 1;
    }

    switch (type) {
      case 'pic':
        tableElements = {
          1: {
            'html': '<td style="width:33%; background-color: #eee"></td>'
          },
          2: {
            'html': '<td><img src="http://lorempixel.com/150/150" alt="random image" /></td>'
          },
          3: {
            'html': '<td style="width:33%; background-color: #eee"></td>'
          }
        };
        break;
      case 'piccom1':
        tableElements = {
          1: {
            'html': '<td style="width:33%; background-color: #eee"></td>'
          },
          2: {
            'html': '<td><img src="http://lorempixel.com/150/150" alt="random image" /></td>'
          },
          3: {
            'html': '<td style="width:33%; background-color: #eee"></td>'
          }
        };
        break;
      case 'piccom2':
        tableElements = {
          1: {
            'html': '<td style="width:33%; background-color: #eee"></td>'
          },
          2: {
            'html': '<td><img src="http://lorempixel.com/150/150" alt="random image" /></td>'
          },
          3: {
            'html': '<td style="width:33%; background-color: #eee"></td>'
          }
        };
        break;
      case 'sim':
        tableElements = [{
            'html': '<td style="width:33%; background-color: #eee"></td>'
          },
          {
            'html': '<td><img src="http://lorempixel.com/150/150" alt="random image" /></td>'
          },
          {
            'html': '<td style="width:33%; background-color: #eee"></td>'
          }];
        break;
      default:
        console.log('nothing selected');
    }

    Elements.insert({
      'name': 'Element #' + Math.ceil(highValue) + ' - ' + type,
      'rowElements': tableElements,
      'htmlBody' : '<tr><td>Lorem ipsum</td></tr>',
      'text': defaultComment,
      'rank': highValue,
      'number': highValue
    });
  },
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
