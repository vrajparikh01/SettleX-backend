const express = require('express');
const {onlyadmin} = require('../../middlewares/auth');
const { uploadStorage } = require('../../utils/upload');
const { sendSuccessResponse } = require('../../utils/ApiResponse');
const httpStatus = require('http-status');
const config = require('../../config/config');
const catchAsync = require('../../utils/catchAsync');


const router = express.Router();

router.post('/upload/', uploadStorage.single('file'), catchAsync((req, res) => {
  const url = req.file.path;
  sendSuccessResponse(res, 'file uploaded successfully', url, httpStatus.CREATED);
}));

module.exports = router;
