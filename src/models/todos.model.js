import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Todo = db.define("todos", {
    id: {
        type : DataTypes.INTEGER,
        primaryKey  : true ,
        autoIncrement   :true,
    },
    title: {
        type : DataTypes.STRING(30),
        allowNull : false,
        unique : true,
    },
    description: {
        type : DataTypes.STRING,
        allowNull : false,
    },
    completed: {
        type : DataTypes.BOOLEAN(),
        allowNull : false,
    }
});

export default Todo;