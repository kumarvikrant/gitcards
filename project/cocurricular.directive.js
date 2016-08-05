angular.module('portfolio')
 .directive('newCard',function() {
 return {
     templateUrl: 'cocurricular.tmpl.html',
     scope: {
       value:'@',
       img:'@'
     }
 }
});
