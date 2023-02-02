const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send("<h1 style='color: red;'>404 Error. Wump wump.</h1>");
}
);

module.exports = router;
