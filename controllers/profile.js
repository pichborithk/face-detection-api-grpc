const handleProfileGet = (req, res, db) => {
  const { id } = req.params;
  db.select('*')
    .from('users')
    .where({ id: id })
    .then((data) => {
      if (data.length) {
        res.json(data);
      } else {
        res.status(400).json('Not found');
      }
    })
    .catch((err) => res.status(400).json('error getting user'));
};

const handleProfileUpdate = (req, res, db) => {
  const { id } = req.params;
  const { name, age, pet } = req.body.formInput;
  db('users')
    .where({ id: id })
    .update({ name: name, age: age, pet: pet })
    .then((resp) => {
      if (resp) {
        res.json('success');
      } else {
        res.status(400).json('Unable to update');
      }
    })
    .catch((err) => res.status(400).json('Error updating user'));
};

module.exports = { handleProfileGet, handleProfileUpdate };
