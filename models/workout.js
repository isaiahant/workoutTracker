const { model, Schema } = require('mongoose')


const Plan = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter an excercise type'
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter an exercise name'
      },
      duration: {
        type: Number,
        trim: true,
        required: 'Enter a duration'
      },
      weight: {
        type: Number,
        trim: true,
        required: 'Enter a weight'
      },
      reps: {
        type: Number,
        trim: true,
        required: 'Enter an amount of reps'
      },
      sets: {
        type: Number,
        trim: true,
        required: 'Enter an amount of sets'
      }
    }
  ]
})


module.exports = model('Workout', Workout)