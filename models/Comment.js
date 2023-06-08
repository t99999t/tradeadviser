
module.exports = (sequelize) => {

const {Model, DataTypes} = require("sequelize");

// Helper function
const uppercaseFirst = str => `${str[0].toUpperCase()}${str.substr(1)}`;


    class Comment extends Model {




        getCommentable(options) {
            if (!this.commentableType) return Promise.resolve(null);
            const mixinMethodName = `get${uppercaseFirst(this.commentableType)}`;
            return this[mixinMethodName](options);
        }
    }
    Comment.init({

        title: DataTypes.STRING,
        commentableId: DataTypes.INTEGER,
        commentableType: DataTypes.STRING
    }, { sequelize, modelName: 'Comment' });
return Comment;
}
