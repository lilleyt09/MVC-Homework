const { Users } = require('../models');

const userData = [{
        username: "Kirk",
        password: "Shatner"

    },
    {
        username: "Spock",
        password: "Nimoy"
    },
    {
        username: "Bones",
        password: "Kelley"
    }
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;