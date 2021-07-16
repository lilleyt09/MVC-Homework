const { Posts } = require('../models');

const postData = [{
        title: "Furry Menace",
        content: "The trouble with tribbles...",
        user_id: 1

    },
    {
        title: "The Final Frontier",
        content: "What does God need with a starship?",
        user_id: 2
    },
    {
        title: "No Bones About It",
        content: "Dammit Jim, I'm a doctor, not a programmer!",
        user_id: 3
    }
];

const seedPosts = () => Posts.bulkCreate(postData);

module.exports = seedPosts;