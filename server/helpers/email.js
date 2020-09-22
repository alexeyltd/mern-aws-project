exports.registerEmailParams = (email, token) => {
  return {
    Source: "protocarpool@gmail.com",
    Destination: {
      ToAddresses: [email],
    },
    ReplyToAddresses: ["sk.alexey.pavlenko@gmail.com"],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<html>
          <h1>Verify your email address</h1>
          <p>Ple use the following link to complete registration:</p>
          <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
          </html>`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Complete your registration",
      },
    },
  };
};

exports.forgotPasswordEmailParams = (email, token) => {
  return {
    Source: "protocarpool@gmail.com",
    Destination: {
      ToAddresses: [email],
    },
    ReplyToAddresses: ["sk.alexey.pavlenko@gmail.com"],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<html>
          <h1>Reset password link</h1>
          <p>Ple use the following link to reset your password:</p>
          <p>${process.env.CLIENT_URL}/auth/password/reset/${token}</p>
          </html>`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Complete your registration",
      },
    },
  };
};
