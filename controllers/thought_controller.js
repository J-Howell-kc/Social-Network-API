const { User, Thought } = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})    }
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
                });
},

getThoughtById ({ params }, res) {
    Thought.findOne({ _id: params.id})
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({ 'Invalid Thought Id.'});
            return;
        }
        res.json(dbThoughtData);
})
.catch(err => {
    console.log(err);
    res.status(400).json(err);   
});

},

createThought ({ body}, res) {
    Thought.create(body)
    .then(dbThoughtData => {
        return User.findOneAndUpdate(
            { _id: body.userId},
            {$push: { thoughts: dbThoughtData}},
            {new: true}
        )
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ 'Invalid User Id.'});
            return;
        }
        res.json(dbUserData)
    })
    .catch(err =>  {
        console.log(err);
        res.status(400).json(err);
});
}

updateThought({ params, body }, res ) {
    Thought.findOneAndUpdate({ _id: params.id }, body, {new: true })
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({ message: "Invalid Thought Id." });
            return;
                    }
                    res.json(dbThoughtData)
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
}

deleteThought({ params }, res ) {
    Thought.findOneAndDelete({ _id: params.id }, body, {new: true })
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({ message: "Invalid Thought Id." });
            return;
                    }
                    res.json(dbThoughtData)
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
}

createReaction({ params, body }, res ) {
    Thought.findOneAndUpdate({ _id: params.thoughtId },
        { $push: {reactions: body }},
         {new: true })
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({ message: "Invalid Thought Id." });
            return;
                    }
                    res.json(dbThoughtData)
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
}

deleteReaction({ params }, res ) {
    Thought.findOneAndDelete({ _id: params.thoughtId }, 
        { $pull: {reactions: { reactionId: params.reactionId } } } 
        {new: true })
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({ message: "Invalid Thought Id." });
            return;
                    }
                    res.json(dbThoughtData)
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
}

module.exports = thoughtController; 