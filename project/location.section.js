angular.module('portfolio')
 .directive('locationSection',function() {
 return {
     templateUrl: 'location.section.html',
     scope: {
       value:'@',
       img:'@'
     }
 }
});
