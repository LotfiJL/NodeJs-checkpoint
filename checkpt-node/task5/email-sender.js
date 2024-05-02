const nodemailer = require("nodemailer");

// Créer un objet de transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lotfijellali0@gmail.com",
    pass: "GoMycode",
  },
});

// Définir le contenu de l'email
let mailOptions = {
  from: "lotfijellali0@gmail.com",
  to: "lotfijjellali40@gmail.com",
  subject: "Test Email",
  text: "Ceci est un email de test envoyé depuis Node.js.",
};

// Envoyer l'email
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log("Une erreur est survenue :", err);
  } else {
    console.log("Email envoyé :", info.response);
  }
});
