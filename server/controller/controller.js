module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get("db");
    db.get_inventory()
      .then(response => {
        //   console.log(response);
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "Something Went Wrong" });
        console.log(err);
      });
  },
  getOneInventory: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.getOne_inventory(id)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        res.status(500).send({ errorMessage: "Something Went Wrong" });
        console.log(err);
      });
  },
  addInventory: (req, res) => {
    const db = req.app.get("db");
    const { name, price, image_url } = req.body;
    // console.log(req.body);
    db.add_inventory([name, price, image_url])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something Went Wrong" });
        console.log(err);
      });
  },
  delete: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_inventory(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something Went Wrong" });
        console.log(err);
      });
  }
};
