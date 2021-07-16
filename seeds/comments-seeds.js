const { Comments } = require('../models');

const commentData = [{
        comment_text: "The trouble with tribbles...",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "What does God need with a starship?",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Dammit, Jim, I'm a doctor, not a programmer!",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;