const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const { sendSuccessResponse } = require('../../utils/ApiResponse');
const catchAsync = require('../../utils/catchAsync');
const { equityService } = require('../../services/index');

const addEquity = catchAsync(async (req, res) => {
  await equityService.addEquity(req.body);
  return sendSuccessResponse(res, 'equity created successfully', {}, httpStatus.CREATED);
});

const getEquities = catchAsync(async (req, res) => {
  const limit = 10;
  const page = req.query?.page || 1;
  const skip = (page - 1) * limit;

  const chain_id = req.query?.chain_id;

  const equities = await equityService.getEquities(chain_id, limit, skip);
  return sendSuccessResponse(res, 'equities are retrived successfully', equities, httpStatus.OK);
});



module.exports = {
  addEquity,
  getEquities,
};
