const Joi = require('joi');
const { checkValidEthereumAddress } = require('./custom.validation');

const addEquity = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    logo: Joi.string().required(),
    description: Joi.string().required(),
    round_type: Joi.string().required(),
    fdv: Joi.number().required(),
    offered_amount: Joi.number().required(),
    minimum_bid: Joi.number().required(),
    price_per_equity: Joi.number().required(),
    chain_id: Joi.number().required(),
    wallet_address: Joi.string().required().custom(checkValidEthereumAddress),

  }),
};

const getEquities = {
  query: Joi.object().keys({
    page: Joi.number().optional(),
    chain_id: Joi.number().required(),
    wallet_address: Joi.string().required().custom(checkValidEthereumAddress),
  }),
};



module.exports = {
  addEquity,
  getEquities
};
