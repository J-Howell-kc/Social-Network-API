// API routes 

const router = require('express').Router();

const { getAllThoughts,
getThoughtById,
createThought,
updateThought,
updateThought,
deleteThought,
createReaction,
deleteReaction } = require("../../comntrollers/thought-controller");

//Thoughts

router
    .route("/")
    .get(getAllThoughts)
    .post(createThought);

//Thoughts by ID

router
    .route("/:id")
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

//Reactions by Thought ID

router
    .route("/:thoughtId/reactions")
    .post(createReaction);

//Reactions by Reaction ID

router
    .route("/:thoughtId/reactions/:reactionId")
    .delete(deleteReaction);

    module.exports = router;
