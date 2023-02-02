// API route
const router = require("express").Router();

const { getAllUsers,
getUserById,
createUser,
updateUser,
deleteUser,
addFriend,
deleteFriend } = require("../../controllers/user-controller");

// users

router
    .route("/")
    .get(getAllUsers)
    .post(createUser);

//users by ID

router
    .route("/:id")
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

//friends by userID/friendID

router
    .route("/:userId/friends/:friendId")
    .post(addFriend)
    .delete(deleteFriend);


module.exports = router;