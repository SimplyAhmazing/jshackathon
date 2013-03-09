var app = {};

app.Reservation = Backbone.Model.extend({
    defaults: {
        name:       "",
        phone:      "",
        count:      0,
        confirmed:  false
    }
});

app.Reserved = Backbone.Collection.extend({
    model: app.Reservation,
    localStorage: new Store("backbone-todo")
});

app.Unreserved = Backbone.Collection.extend({
    model: app.Reservation,
    localStorage: new Store("backbone-todo")
});

app.unreservedList = new app.Unreserved();
app.reservedList = new app.Reserved();
app.unreservedList.fetch();
app.reservedList.fetch();

app.ReservationFormView  = Backbone.View.extend({
    el: '#resform',
    initialize: function(){
        this.phone = this.$("#phonefield");
        this.name = this.$("#namefield");
        this.number = this.$("#numberfield");
        $("#pending-reservations").html("");

    },
    events: {
        'submit': 'addReservation'
    },

    addReservation: function(e){
        e.preventDefault();
         newres = new app.Reservation({
            name: this.name.val().trim(),
            phone: this.phone.val().trim(),
            count: this.number.val().trim()
        });

        app.unreservedList.create(newres);
        console.log("This is the length:", app.unreservedList.length)
    }
});


app.ReservationView  = Backbone.View.extend({
    el: '#pending-reservations',
    template: _.template($('#resView').html()),
    initialise: function(){
        this.render();
    },
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var test = new app.ReservationFormView();
