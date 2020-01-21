var Product = require('./');
// complete the dbhelpers
var helpers = {
  getProductsHelper: () => Product.find({}),
  postProductsHelper: (item, min_cost, curr_bid, ends_in, image) => Product.create({ item, min_cost, curr_bid, ends_in, image }),
  updateProductHelper: (_id, curr_bid) => Product.findOneAndUpdate({ _id }, { curr_bid } ),
  deleteProductHelper: (_id) => Product.deleteOne({ _id })
};

module.exports = helpers