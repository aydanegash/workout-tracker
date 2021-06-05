const router = require('express').Router();
const Workouts = require("../models/workout.js");

router.post("./api/workouts", (req, res) => {
	Workouts.create({})
        .then((dbWorkouts) => {
         res.json(dbWorkouts);   
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get("./api/workouts/:id", (req, res) => {
    db.Workouts.find( {body}, (error, found) => {
      if (error) {
        console.log(error);
      } else {
        res.json(found);
      }
    });
  });


  
      (error, edited) => {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          console.log(edited);
          res.send(edited);
        }
      }
    );
  });