module.exports = {
  create(req, res, next) {
    const db = req.app.get("db");
    const { name, description, price, image_url } = req.body;
    db.create_product([name, description, price, image_url])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send("Something went wrong!", err);
        console.log(err);
      });
  },

  getOne(req, res, next) {
    const db = req.app.get("db");
    const { id } = req.params;
    db.read_product(id)
      .then(product => res.status(200).send(product))
      .catch(err => {
        res.status(500).send("Something went wrong!", err);
        console.log(err);
      });
  },

  getAll(req, res, next) {
    const db = req.app.get("db");
    db.read_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send("Something went wrong!", err);
        console.log(err);
      });
  },

  update(req, res, next) {
    const db = req.app.get("db");
    const { id } = req.params;
    const { desc } = req.query;
    db.update_product([id, desc])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send("Something went wrong!", err);
        console.log(err);
      });
  },

  delete(req, res, next) {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_product(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send("Something went wrong!", err);
        console.log(err);
      });
  }
};