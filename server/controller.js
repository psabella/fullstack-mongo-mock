// Controller here
// complete building out the controller
var Product = require('../db/');
var helpers = require('../db/dbhelpers.js');

const controller = {
  get: (req, res) => {
    helpers.getProductsHelper()
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((err) => {
        console.error(err);
      })
  },
  post: (req, res) => {
    let { item, min_cost, curr_bid, ends_in, image } = req.body;
    helpers.postProductsHelper(item, min_cost, curr_bid, ends_in, image)
      .then(() => {
        res.status(201).send('Product created');
      })
      .catch((err) => {
        console.error(err);
      })
  },
  put: (req, res) => {
    let { _id } = req.params;
    let { curr_bid } = req.body;
    helpers.updateProductHelper(_id, curr_bid)
      .then(() => {
        res.status(200).send('Product updated');
      })
      .catch((err) => {
        console.error(err);
      })
  },
  delete: (req, res) => {
    let { _id } = req.params;
    helpers.deleteProductHelper(_id)
      .then(() => {
        res.status(200).send('Product deleted');
      })
      .catch((err) => {
        console.error(err);
      })
  }
}

module.exports = controller