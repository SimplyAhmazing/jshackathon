var app = {};



reserved = new Backbone.Collection.extend(properties, [classProperties])
unreserved = new Backbone.Collection.extend(properties, [classProperties])

app.Reservation = Backbone.Model.extend({
    defaults: {
        name:       "",
        phone:      "",
        count:      0,
        confirmed:  false
    }
});

