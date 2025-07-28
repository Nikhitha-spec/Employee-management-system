// controllers/homeController.js
const Employee = require('../models/employee');

module.exports.home = async (req, res) => {
    const employees = await Employee.find();
    res.render('home', { employees });
};

module.exports.create = async (req, res) => {
    await Employee.create(req.body);
    res.redirect('/');
};

module.exports.delete = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.redirect('/');
};

module.exports.edit = async (req, res) => {
    const emp = await Employee.findById(req.params.id);
    res.render('edit', { employee: emp });
};

module.exports.update = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
};
