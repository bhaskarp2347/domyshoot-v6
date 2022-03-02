module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4cd516289ba59408390cafa1d6517ab6'),
  },
});
