# workout-tracker

## mvp (minimum viable product)

minium product will be a workout tracker without sharing features, This should be the main focus for this week.

Login page, and create workout and log workout capabilities. 

A workout will be an object that should consist of atleast the following properties.


```js
Workout{
        ObjectId:
        name: 
        exercises: [{exercise}, {exercise}]
    }
```

Exercise can probably just be schema and not a model
```js
exercise{
    name:
    sets: [{reps, weight}]
}
```

Creating a workout should add it to the user workouts and for now not have public feature. 

Logging a workout should allow users to start a selected workout with the formatted workout but be allowed to modify it.



{
    "_id": ObjectId("64b2f19d6d1a5a35f8e1dfbc"),
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 28,
    "height": 180, // in cm
    "weight": 75,  // in kg
    "goal": "muscle gain",
    "workout_plans": [
      {
        "plan_id": ObjectId("64b2f24b8f0a5a35f8e1dfcc"),
        "name": "Beginner Strength Plan",
        "goal": "Strength Training",
        "duration_weeks": 8,
        "workouts": [
          {
            "workout_id": ObjectId("64b2f2748f0a5a35f8e1dfce"),
            "day": "Monday",
            "name": "Upper Body Strength",
            "exercises": [
              {
                "exercise_id": ObjectId("64b2f29a8f0a5a35f8e1dfd0"),
                "name": "Bench Press",
                "sets": [
                  { "reps": 10, "weight_kg": 50, "rest_sec": 90 },
                  { "reps": 8, "weight_kg": 55, "rest_sec": 90 },
                  { "reps": 6, "weight_kg": 60, "rest_sec": 120 }
                ]
              },
              {
                "exercise_id": ObjectId("64b2f2b48f0a5a35f8e1dfd2"),
                "name": "Pull-ups",
                "sets": [
                  { "reps": 10, "rest_sec": 120 },
                  { "reps": 8, "rest_sec": 120 },
                  { "reps": 6, "rest_sec": 120 }
                ]
              }
            ]
          },
          {
            "workout_id": ObjectId("64b2f2c68f0a5a35f8e1dfd4"),
            "day": "Wednesday",
            "name": "Leg Day",
            "exercises": [
              {
                "exercise_id": ObjectId("64b2f2e08f0a5a35f8e1dfd6"),
                "name": "Squats",
                "sets": [
                  { "reps": 12, "weight_kg": 70, "rest_sec": 90 },
                  { "reps": 10, "weight_kg": 75, "rest_sec": 90 },
                  { "reps": 8, "weight_kg": 80, "rest_sec": 120 }
                ]
              },
              {
                "exercise_id": ObjectId("64b2f2f88f0a5a35f8e1dfd8"),
                "name": "Lunges",
                "sets": [
                  { "reps": 12, "weight_kg": 20, "rest_sec": 90 },
                  { "reps": 12, "weight_kg": 20, "rest_sec": 90 }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
  