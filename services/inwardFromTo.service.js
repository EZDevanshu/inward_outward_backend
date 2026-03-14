const inwardFromToModel = require('../models/inwardFromTo.model');

async function getAllInwardFromTo() {
    try {
        const data = await inwardFromToModel.find();
        if (data) {
            return {
                error: false,
                data,
                message: 'data get successful in inwardFromTo table'
            }
        } else {
            return {
                error: true,
                message: 'some error occured in get data in inwardFromTo table'
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

async function getByIDInwardFromTo(id) {
    try {
        const data = await inwardFromToModel.findById(id);
        if (data) {
            return {
                error: false,
                data,
                message: 'data getByID successful in inwardFromTo table'
            }
        } else {
            return {
                error: true,
                message: 'some error occured in getByID in inwardFromTo table'
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

async function insertInwardFromTo(payload) {
    try {
        const data = await inwardFromToModel.create(payload);
        if (data) {
            return {
                error: false,
                data,
                message: 'data insert successful in inwardFromTo table'
            }
        } else {
            return {
                error: true,
                message: 'some error occured in insert data in inwardFromTo table'
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

async function updateInwardFromTo(id, payload) {
    try {
        const data = await inwardFromToModel.findByIdAndUpdate(id, payload);
        if (data) {
            return {
                error: false,
                data,
                message: 'data update successful in inwardFromTo table'
            }
        } else {
            return {
                error: true,
                message: 'some error occured in update inwardFromTo table'
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

async function deleteInwardFromTo(id) {
    try {
        const data = await inwardFromToModel.findByIdAndDelete(id);
        if (data) {
            return {
                error: false,
                data,
                message: 'data deleted successful in inwardFromTo table'
            }
        } else {
            return {
                error: true,
                message: 'some error occured in deleting data in inwardFromTo table'
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

module.exports = { getAllInwardFromTo, getByIDInwardFromTo, insertInwardFromTo, updateInwardFromTo, deleteInwardFromTo };
