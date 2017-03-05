
var moment = require('moment');
var express = require('express');

var MongoClient = require('mongodb').MongoClient
  , format = require('util').format;

var dbRoute = 'mongodb://127.0.0.1:27017/userdata';

/*------------Team 1 ------------------*/
exports.getFirstTeam = function(req, res) {
    MongoClient.connect(dbRoute, function(err, db) {
        if(err) throw err;
        db.collection('users').find({'owning_group':'owner_support_1'}).toArray(function(err, docs) {
            if (docs) {
                return res.json({'success': true,'message': '', data:docs});
            } else {
                return res.json({'success': false,'message': 'Oops! Somthing went wrong.'});
            }
        });
    });
};

/*---------------Team 2 ----------------*/
exports.getSecondTeam = function(req, res) {
    MongoClient.connect(dbRoute, function(err, db) {
        if(err) throw err;
        db.collection('users').find({'owning_group':'owner_support_2'}).toArray(function(err, docs) {
            if (docs) {
                return res.json({'success': true,'message': '', data:docs});
            } else {
                return res.json({'success': false,'message': 'Oops! Somthing went wrong.'});
            }
        });
    });
};
