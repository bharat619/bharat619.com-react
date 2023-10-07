const emailjs = require("@emailjs/nodejs");

exports.handler = async (event, context, callback) => {
  console.log(JSON.parse(event.body));
  try {
    await emailjs.send(
      process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
      process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
      JSON.parse(event.body),
      {
        publicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY,
        privateKey: process.env.REACT_APP_EMAIL_JS_PRIVATE_KEY,
      }
    );
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(error),
    };
  }
};
