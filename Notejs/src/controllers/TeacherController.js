import { json } from "express/lib/response";
import teacherService from "../services/teacherServices";

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }

    let teacherData = await teacherService.handleUserLogin(email, password);

    return res.status(200).json({
        errCode: teacherData.errCode,
        message: teacherData.errMessage,
        user: teacherData.user ? teacherData.user : {}
    })
}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id;
    let users = await userService.getAllUsers(id);

    return res.status(200).json({
        errCode: 0,
        errMessage: "OK",
        users
    })
}


let handleCreateNewUser = async (req, res) => {
    let message = await userService.CreateNewUser(req.body)
    return res.status(200).json(message)
}

let handleEditUser = async (req, res) => {
    let data = req.body;
    let message = await userService.updateUserData(data);
    return res.status(200).json(message)
}

let handleDeleteUser = async (req, res) => {
    if (!req.body.ID) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters"
        })
    }
    let message = await userService.DeleteUser(req.body.ID)
    return res.status(200).json(message)
}


let getAllCode = async (req, res) => {
    try {
        let data = await userService.GetAllCodeService(req.query.type);
        return res.status(200).json(data);
    } catch (e) {
        console.log('Get all code error', e)
        return res.status(200).json({
            errCode: -1,
            errMessage:'Error from server'
        })
    }
}

module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
    handleCreateNewUser: handleCreateNewUser,
    handleEditUser: handleEditUser,
    handleDeleteUser: handleDeleteUser,
    getAllCode:getAllCode,
}