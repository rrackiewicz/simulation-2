module.exports = {
  //TODO: POST body {name, address, city, state, zip}
  create: (req, res) => { 
    const dbInstance = req.app.get('db')
    const {name, address, city, state, zip, image, mortgage, rent} = req.body
    
    dbInstance.create_listing([name, address, city, state, zip, image, mortgage, rent])
      .then((listings) => res.status(200).send(listings))
      .catch(() => res.status(500).send())
  },

  //TODO: GET
  getAll: (req, res) => {
    const dbInstance = req.app.get('db')

    dbInstance.get_listings()
    .then(listings => res.status(200).send(listings))
    .catch(err => res.status(500).send(err))
  },

  //TODO: DELETE :id
  delete: (req, res) => {
    const { id } = req.params
    const dbInstance = req.app.get('db')

    dbInstance.delete_listing(id)
    .then(() => res.status(200).send())
    .catch(err => res.status(500).send(err))
  }
}