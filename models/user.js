module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        user_email: {
            type: DataTypes.STRING(25),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        user_pw: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        user_birth: {
            type: DataTypes.DATE,
        },
        user_name:{
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        user_address:{
            type: DataTypes.STRING(50),
        },
        user_tel: {
            type: DataTypes.STRING(20),
        },
        user_type: {
            type: DataTypes.STRING(10),
        },
    },{
        timestamps: true,
        paranoid: true,
    }
    );
}