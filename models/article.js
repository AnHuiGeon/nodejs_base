module.exports = (sequelize, DataTypes) => {
    return sequelize.define('article', {
        article_title:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        article_description:{
            type: DataTypes.TEXT,
        },
        article_img: {
            type: DataTypes.STRING(255),
        },
        article_type:{
            type: DataTypes.STRING(10),
        },
        article_check:{
            type: DataTypes.BOOLEAN,
        },
        created_at:{
            type: DataTypes.DATE,
            allowNull:false,
            defaultValue: DataTypes.Now,
        }
    }, {
        timestamps: false,
    });
}