module.exports = (sequelize, DataTypes) => {
    return sequelize.define('store', {
        store_name:{
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        store_address:{
            type: DataTypes.TEXT,
        },
        store_type:{
            type: DataTypes.STRING(10),
        },
        store_img: {
            type: DataTypes.STRING(255),
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