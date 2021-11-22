let profile = require("./profile_data.json");

module.exports = (app) => {
  const getProfile = (req, res) => res.json(profile);
  app.get('/api/profile', getProfile);

  const updateProfile = (req, res) => {
    const newProfile = req.body;
    profile = newProfile;
    res.json(profile);
  }
  app.put('/api/profile', updateProfile);
}