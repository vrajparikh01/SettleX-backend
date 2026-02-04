const {Equity} = require("../../models")

const addEquity = async (data) => {
  const offer = await Equity.create(data);
  return offer;
};

const getEquities = async (chain_id, limit, skip) => {

  const conditions = {is_deleted: false};

  if(chain_id) {
    Object.assign(conditions, {chain_id: Number(chain_id)});
  }

  const totalEquities = await Equity.countDocuments(conditions);
  const equities = await Equity.aggregate([
    {
      $match: conditions
    },
    { $skip: skip },
    { $limit: limit },
    {
      $project: {
        _id: 1,
        name: 1,
        logo: 1,
        description: 1,
        round_type: 1,
        fdv: 1,
        offered_amount: 1,
        minimum_bid: 1,
        chain_id: 1,
        price_per_equity: 1,
      }
    }
  ]);
  return {equities, totalEquities};

};


module.exports = {
  addEquity,
  getEquities,
};
