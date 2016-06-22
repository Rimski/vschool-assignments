var mongoose = require("mongoose");
var schema = mongoose.Schema;

var tag = new schema ({
    name: String,
    relatedPosts: [{
        type: schema.types.ObjectId,
        ref: "post"
    }],
});
var post = new schema ({
    title: String,
    tags: [{
        type: schema.types.ObjectId,
        ref: "tag"
    }],
    auther: [{
        type: schema.types.ObjectId,
        ref: "user"
    }],,
    comment: [{
        description: String,
        auther: user_id,
        _id: String
    }]
});
var user = new schema ({
    name: String,
    userName: String,
    title: String,
    posts: [{
        type: schema.types.ObjectId,
        ref: "post"
    }],
})
