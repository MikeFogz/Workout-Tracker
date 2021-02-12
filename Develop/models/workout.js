const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
        type: {
            type: String,
            trim: true,
            required: "Please enter a Type of Exercise"
        },
        name: {
            type: String,
            trim: true,
            required: "Please provide a name"
        },
        duration: {
            type: Number,
            required: "How long did you do this?"
        },
        weight: {
            type: Number,
            required: "What weight did you use?"
        },
        reps: {
            type: Number,
            required: "How many reps?"
        },
        sets: {
            type: Number,
            required: "How many sets?"
        },
        distance: {
            type: Number,
            required: "How far did you go?"
        },
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;