module.exports = (sequelize, DataTypes) => {
    return sequelize.define('welfareorg', {
        org_group_name:{
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        org_name:{
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        org_img: {
            type: DataTypes.STRING(255),
        },
        org_address:{
            type: DataTypes.TEXT,
        },
        org_type:{
            type: DataTypes.STRING(10),
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