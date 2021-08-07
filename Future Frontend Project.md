# Future Frontend Project: The Exercise Library

## Expected Duration

Around 60 - 90 minutes (please make sure to send across your code around the 90 minute mark at the most).

## Motivation

At Future, our coaches build workouts with exercises in our library, but our exercise library is quite large. Therefore, we would like to make it easy for our coaches to find exercises and their details quickly and easily while building a workout.

The point of this exercise is for you to demonstrate your ability to take an ambiguous but fairly straightforward problem and produce a solution that’s functional, intuitive, and follows ES6 & React conventions where appropriate.

## Instructions

The included data file `exercises.json` contains a subset of our database and its fields — an array of hashes containing exercise information.

Your job is to create a single-page React application that must provide:

1. A pane on the left that allows you to browse all of the available exercises as a list of exercise names.
2. A way to highlight and select an exercise from the left pane and see the description and video of the selected exercise in a detail pane on the right.
3. A sticky pane at the top of the left pane that provides a way to live-filter the exercise list by name by way of text input.

You are free to use any environment you wish, but if you don't have a preference or just want to get going, here's one that will be fine:
`https://github.com/facebook/create-react-app`. Feel free to use packages for data manipulation you are familiar with (e.g. _lodash_). However, for this exercise you are expected to build your own UI componentry, therefore external component packages (e.g. _react-table_) and UI framework packages (e.g. _bootstrap_) are out of bounds.

## The Data Set

Each hash in the array has the following fields:

`id` **REQUIRED** The exercise id

`name` **REQUIRED** The name of the exercise

`description` A detailed description of the exercise

`muscle_groups` Comma-separated list of muscle groups (e.g. `Shoulders,Traps`)

`equipment_required` Comma-separated list of equipment required if any (e.g.`Dumbells`)

`movement_patterns` The type of movements associated with this (`Lower Pull`)

`synonyms` Alternate names for the exercise

`side` The side the movement is on if any (i.e. on your `left_leg` or `right_side`)

`is_alternating` Boolean value of whether the exercises calls for you to alternate movement (i.e. lift a dumbbell with your left arm, followed by your right arm).

`video` Hash of video of movement which contains:

`is_flipped` Whether the video needs to be flipped to show the correct side

`url` URL of video

`audio` Hash of audio of movement which contains:

`url` URL of name of audio

Fields that are not required may contain `null` values or be omitted.

## Optional

If you want an extra challenge or find yourself with additional time, you can extend this project any of the following ways:

1. Additional filters based off of different fields in the exercise hash, as appropriate.
2. A display for more details of a given exercise.
3. A way to respond to a query string in the URL and automatically select that exercise and display its details.
4. A responsive solution.

Please note that these are **not** required to complete the exercise — you may skip this section if you wish or if you are out of time.
