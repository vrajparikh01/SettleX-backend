const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');

const equitySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    round_type: {
      type: String,
      required: true,
    },
    fdv: {
      type: Number,
      required: true,
    },
    offered_amount: {
      type: Number,
      required: true,
    },
    minimum_bid: {
      type: Number,
      required: true,
    },
    price_per_equity  : {
      type: Number,
      required: true,
    },
    chain_id: {
      type: Number,
      required: true,
    },
    is_deleted: {
      type: Boolean,
      default: false
    },
    createdAt: Number,
    updatedAt: Number,
  },
  {
    timestamps: { currentTime: () => Math.floor(Date.now()/1000) }
  }
);

// add plugin that converts mongoose to json
equitySchema.plugin(toJSON);
equitySchema.plugin(paginate);

/**
 * @typedef Equity
 */
const Equity = mongoose.model('equity', equitySchema);

module.exports = Equity;
