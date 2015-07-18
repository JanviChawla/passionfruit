angular.module('starter.services', [])

.factory('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');  
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Administrative Assistant',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    desc: 'I am responsible for supporting senior executives with arranging travel, scheduling meetings, setting up luncheons, and conferences.',
    wages: '$15.79 hourly, $32,840 annual',
    growth: 'Average (8% to 14%)',
    hs: '39',
    ad: '37',
    scnd: '14'
  }, {
    id: 1,
    name: 'AV Production Tech',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
    desc: 'I am responsible for supporting senior executives with arranging travel, scheduling meetings, setting up luncheons, and conferences.',
    wages: '$15.79 hourly, $32,840 annual',
    growth: 'Average (8% to 14%)',
    hs: '39',
    ad: '37',
    scnd: '14'
  }, {
    id: 2,
    name: 'Business Development',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
    desc: 'I am responsible for supporting senior executives with arranging travel, scheduling meetings, setting up luncheons, and conferences.',
    wages: '$15.79 hourly, $32,840 annual',
    growth: 'Average (8% to 14%)',
    hs: '39',
    ad: '37',
    scnd: '14'
  }, {
    id: 3,
    name: 'Career Counseling',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png',
    desc: 'I am responsible for supporting senior executives with arranging travel, scheduling meetings, setting up luncheons, and conferences.',
    wages: '$15.79 hourly, $32,840 annual',
    growth: 'Average (8% to 14%)',
    hs: '39',
    ad: '37',
    scnd: '14'
  }, {
    id: 4,
    name: 'Chef',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png',
    desc: 'I am responsible for supporting senior executives with arranging travel, scheduling meetings, setting up luncheons, and conferences.',
    wages: '$15.79 hourly, $32,840 annual',
    growth: 'Average (8% to 14%)',
    hs: '39',
    ad: '37',
    scnd: '14'
  }, {
    id: 5,
    name: 'Data Analyst',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
    desc: 'I am responsible for supporting senior executives with arranging travel, scheduling meetings, setting up luncheons, and conferences.',
    wages: '$15.79 hourly, $32,840 annual',
    growth: 'Average (8% to 14%)',
    hs: '39',
    ad: '37',
    scnd: '14'
  }, {
    id: 6,
    name: 'Environmental Health & Safety',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
    desc: 'I am responsible for supporting senior executives with arranging travel, scheduling meetings, setting up luncheons, and conferences.',
    wages: '$15.79 hourly, $32,840 annual',
    growth: 'Average (8% to 14%)',
    hs: '39',
    ad: '37',
    scnd: '14'
  }, {
    id: 7,
    name: 'Event Planner',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png',
    desc: 'I am responsible for supporting senior executives with arranging travel, scheduling meetings, setting up luncheons, and conferences.',
    wages: '$15.79 hourly, $32,840 annual',
    growth: 'Average (8% to 14%)',
    hs: '39',
    ad: '37',
    scnd: '14'
  }, {
    id: 8,
    name: 'Facilities Plant Operator',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
    desc: 'I am responsible for supporting senior executives with arranging travel, scheduling meetings, setting up luncheons, and conferences.',
    wages: '$15.79 hourly, $32,840 annual',
    growth: 'Average (8% to 14%)',
    hs: '39',
    ad: '37',
    scnd: '14'
  }, {
    id: 9,
    name: 'Human Resources',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg',
    desc: 'I am responsible for supporting senior executives with arranging travel, scheduling meetings, setting up luncheons, and conferences.',
    wages: '$15.79 hourly, $32,840 annual',
    growth: 'Average (8% to 14%)',
    hs: '39',
    ad: '37',
    scnd: '14'
  }, {
    id: 10,
    name: 'Immigration Specialist',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png',
    desc: 'I am responsible for supporting senior executives with arranging travel, scheduling meetings, setting up luncheons, and conferences.',
    wages: '$15.79 hourly, $32,840 annual',
    growth: 'Average (8% to 14%)',
    hs: '39',
    ad: '37',
    scnd: '14'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Projects', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Blink',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    tags: 'Arduino',
    desc: 'Make an LED blink'
  }, {
    id: 1,
    name: 'Musical Lights',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    tags: 'Raspberry Pi',
    desc: 'Have your lights change color based on the volume of music'
  }, {
    id: 2,
    name: 'My Website',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    tags: 'HTML, CSS',
    desc: 'Build your very own homepage'
  }, {
    id: 3,
    name: 'Hourglass',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    tags: 'Arduino',
    desc: 'Make an hourglass using lights that move from top to bottom as time goes on'
  }, {
    id: 4,
    name: 'Infinity Mirror',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    tags: 'Raspberry Pi, carpentry',
    desc: 'Build your very own infinity mirror using technology and woodshop skills'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});



