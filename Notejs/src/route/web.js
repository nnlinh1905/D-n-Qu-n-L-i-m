import express from "express";
// import { route } from "express/lib/router";
import HomeController from "../controllers/HomeController";
import UserController from "../controllers/userController";
import SubjectController from "../controllers/subjectController";
import TeacherController from "../controllers/teacherController";
let Router = express.Router();

let initWebRouter = (app) => {
    Router.get('/', HomeController.getHomePage);
    Router.get('/test', HomeController.getTestPage);
    Router.get('/crud', HomeController.getCRUD);
    Router.post('/post-crud', HomeController.postCrud);
    Router.get('/get-crud', HomeController.displayCRUD);
    Router.get('/edit-crud', HomeController.getEditCRUD);
    Router.post('/put-crud', HomeController.putCRUD);
    Router.get('/delete-crud', HomeController.deleteCRUD);
    Router.post('/api/login', UserController.handleLogin);
    Router.get('/api/get-all-users', UserController.handleGetAllUsers);
    Router.post('/api/create-new-user', UserController.handleCreateNewUser);
    Router.put('/api/edit-user', UserController.handleEditUser);
    Router.delete('/api/delete-user', UserController.handleDeleteUser);
    Router.get('/api/allcode', UserController.getAllCode);
    Router.get('/api/subject-home', SubjectController.getSubject);
    Router.get('/api/HocSinh-home', SubjectController.getHocSinh);

    //teacher api
    Router.post('/api/login-teacher', TeacherController.handleLogin);
    return app.use("/", Router);
}

module.exports = initWebRouter;