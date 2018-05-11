module.exports = {
  //TODO: POST body {name, address, city, state, zip}
  create: (req, res) => { 
    const dbInstance = req.app.get('db')
    const {name, address, city, state, zip} = req.body
    
    dbInstance.create_listing([name, address, city, state, zip])
      .then((listings) => res.status(200).send(listings))
      .catch(() => res.status(500).send())
  },

  // //TODO: GET
  // getOne: (req, res) => {
  //   const dbInstance = req.app.get('db')
  //   const { id } = req.params

  //   dbInstance.read_product(id)
  //   .then(() => res.status(200).send())
  //   .catch(() => res.status(500).send())
  // },

  //TODO: GET
  getAll: (req, res) => {
    const dbInstance = req.app.get('db')

    dbInstance.get_listings()
    .then(listings => res.status(200).send(listings))
    .catch(err => res.status(500).send(err))
  },

  //TODO: PUT id and body
  // update: (req, res) => {
  //   const dbInstance = req.app.get('db')
  //   const { id } = req.params
  //   const { name, price, image } = req.body

  //   dbInstance.update_product([id, name, price, image])
  //   .then(inventory => {
  //     console.log("Item updated")
  //     res.status(200).send(inventory)
  //   })
  //   .catch(err => {
  //     console.log("Item not updated")
  //     res.status(500).send(err)
  //   })
  // },

  //TODO: DELETE :id
  delete: (req, res) => {
    const { id } = req.params
    const dbInstance = req.app.get('db')

    dbInstance.delete_listing(id)
    .then(() => res.status(200).send())
    .catch(err => res.status(500).send(err))
  }
}