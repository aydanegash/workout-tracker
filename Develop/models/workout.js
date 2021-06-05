const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Did you do Cardio or resistance training?"
            },
            name: {
                type: String,
                require: "What was the name of your exercise?"
            },
            length: {
                type: Number,
                required: "In minutes how long did you exercise for ",
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            weights: {
                type: Number
            },
            distance: {
                type: Number
            },

        }
    ]

});

const Workouts = mongoose.model("workouts", workoutsSchema);

module.exports = Workouts;