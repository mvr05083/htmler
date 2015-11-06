Meteor.methods({
      generateHtmlEntity: function(type) {
        let highValue = 1;
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
            tableElements = [{
              'html': '<td colspan="3"><img src="http://lorempixel.com/600/200"/></td>'
            }];
            break;
          case 'piccom1':
            tableElements = [{
              'html': '<td style="width:200px; background-color: #eee"><img src="http://lorempixel.com/150/200" alt="random image" /></td>'
            }, {
              'html': '<td colspan="2" style="width:400px; background-color: #eee"></td>'
            }];
            break;
          case 'piccom2':
            tableElements = [{
              'html': '<td colspan="2" style="width: 400px; background-color: #eee"></td>'
            }, {
              'html': '<td style="width:200px; background-color: #eee"><img src="http://lorempixel.com/175/200" alt="random image" /></td>'
            }];
            break;
          case 'linebreak':
            tableElements = [{
              'html': '<td colspan="3" style="width:600px; background-color: #eee"><hr style="padding: 20px; border-top: 1px solid #DDD;"></td>'
            }];
            break;
          case 'sim':
            tableElements = [{
              'html': '<td style="width:200px; background-color: #eee"></td>'
            }, {
              'html': '<td style="width:200px">I am a little simple text. You can keep on reading but I promise that you will not learn anything interesting...</td>'
            }, {
              'html': '<td style="width:200px; background-color: #eee"></td>'
            }];
            break;
          default:
            console.log('nothing selected');
        }

        Elements.insert({
          'name': 'Element #' + Math.ceil(highValue) + ' - ' + type,
          'rowElements': tableElements,
          'rank': highValue,
          'number': highValue
        });
      });
