const router = require('express').Router
const { Workout } = require('../models')

router.post('/workouts', (req, res) => {
  Workout.create({})
    .then(workout => res.json(plan))
    .catch(err => console.log(err))
})

router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { tasks: req.body } },
    { new: true, runValidators: true }
  )
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

router.get('/workouts', (req,res)=>{
  Workout.aggregate([
    {
      $addFields: {
        totalWeight: {
          $sum: '$exersise.weight'
        }
      }
    }
  ])
  .then(workout => res.json())
  .catch(err => console.log(err))
})

router.get('/workouts/range', (req, res) =>{
  Workout.aggregate([
    {
      $addFields: {
        totalWeight: {
          $sum: '$exersise.weight'
        }
      }
    }
  ])
  .sort({_id: -1})
  .limit(7)
  .then(workouts => res.json(workouts)) 
  .catch(err => console.log(err))
})

router.delete('/workouts', (req, res) =>{
  Workout.findByIdAndDelete(req.body.id)
  .then(()=> res.json(true))
  .catch(err => console.log(err))
})



module.exports = router