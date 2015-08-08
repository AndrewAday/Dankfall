if (Meteor.isClient) {
  //Init code to give players a landing page.
  Session.set("currentView", "landing");
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

$(document).ready(function(){
  console.log('print');
})

Template.main.helpers({
  whichView: function() {
    return Session.get('currentView');
  }
});


Template.landing.events({
  'click #create': function(events) {
    events.preventDefault();
    console.log(Session.get('currentView'));
    Session.set("currentView", "create");
  },

  'click #join': function(events) {
    events.preventDefault();
    Session.set("currentView", "join");
  }
})

Template.create.events({
  'click #back': function(events) {
    events.preventDefault();
    Session.set("currentView", "landing");
  }
})

Template.join.events({
  'click #back': function(events) {
    events.preventDefault();
    Session.set("currentView", "landing");
  }
})
