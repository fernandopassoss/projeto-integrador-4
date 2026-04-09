import nodemailer from "nodemailer";

const legalName = "Nossa Empresa";

export const sendSuccessLoginEmail = async (mail: string, name: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${legalName} <${process.env.EMAIL_USER}>`,
    to: mail,
    subject: "Login realizado com sucesso!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e2e2; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #008000;">Bem-vindo de volta, ${name}!</h2>
        <p style="font-size: 16px; color: #333;">Você realizou o login com sucesso no nosso sistema.</p>
        <p style="font-size: 14px; color: #666;">Se você não reconhece esta atividade, entre em contato conosco imediatamente.</p>
        <p style="font-size: 16px; color: #333;">Atenciosamente,<br>${legalName}</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export async function sendVerificationTokenEmail(mail: string, name: string, token: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const formattedToken = formatToken(token);

  const mailOptions = {
    from: `${legalName} <${process.env.EMAIL_USER}>`,
    to: mail,
    subject: "Seu código de verificação.",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e2e2; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #008000;">Olá, ${name}!</h2>
        <p style="font-size: 16px; color: #333;">Estamos quase lá! Para concluir seu login, por favor, utilize o código de verificação abaixo:</p>
        <div style="text-align: center; margin: 20px 0;">
          <span style="font-size: 24px; font-weight: bold; background-color: #e2e2e2; padding: 10px 20px; border-radius: 5px; display: inline-block;">
            ${formattedToken}
          </span>
        </div>
        <p style="font-size: 14px; color: #666;">Este código expira em <strong>10 minutos</strong>. Se você não solicitou esse código, ignore este e-mail ou entre em contato conosco imediatamente.</p>
        <p style="font-size: 16px; color: #333;">Atenciosamente,<br>${legalName}</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}

const formatToken = (token: string): string => {
  if (token.length === 6) {
    return `${token.substring(0, 3)}-${token.substring(3)}`;
  }
  throw new Error('Token deve ter exatamente 6 dígitos');
};
