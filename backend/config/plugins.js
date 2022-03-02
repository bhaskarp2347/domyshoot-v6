module.exports = ({ env }) => ({
  // Development mode
  /*email: {
    provider: 'nodemailer',
    providerOptions: {
      host: 'localhost',
      port: 1025,
      ignoreTLS: true,
    },
  },*/
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'website@domyshoot.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultTo: env('SMTP_TO_EMAIL'),
        defaultFrom: env('SMTP_FROM_EMAIL'),
        defaultReplyTo: env('SMTP_REPLY_TO_EMAIL'),
      },
    },
  },
});
