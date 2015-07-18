angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, LoginService) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('status');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

.controller('StatusCtrl', function($scope, $state) {
    $scope.status = function() {
      $state.go('story');
    }
})

.controller('StoryCtrl', function($scope, $state) {
    $scope.story = function() {
      $state.go('results');
    }
})

.controller('ResultsCtrl', function($scope, $state) {
  $scope.results = function() {
    $state.go('tab.chats');
  }
})

.controller('DashCtrl', function($scope, Projects) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Projects.all();
  $scope.remove = function(chat) {
    Projects.remove(chat);
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ProjectDetailCtrl', function($scope, $stateParams, Projects) {
  $scope.chat = Projects.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});