# workout-tracker

## mvp (minimum viable product)

minium product will be a workout tracker without sharing features, This should be the main focus for this week.

Login page, and create workout and log workout capabilities. 

A workout will be an object that should consist of atleast the following properties.


```JSON
Workout{
        ObjectId:
        name: 
        exercises: [{exercise}, {exercise}]
    }
```

Exercise can probably just be schema and not a model
```JSON
exercise{
    name:
    sets: [{reps, weight}]
}
```

Creating a workout should add it to the user workouts and for now not have public feature. 

Logging a workout should allow users to start a selected workout with the formatted workout but be allowed to modify it.