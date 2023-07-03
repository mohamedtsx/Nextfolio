const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
    const body = JSON.parse(req.body);
    
    const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `;

    const data = {
        to: body.email,
        from: 'mohamed@khalidjs.com',
        subject: 'Thank you - I received your contact request',
        text: message, // you be replaced with your message to client
        html: message.replace(/\r\n/g, '<br>' )
    }

    mail.send(data);

    res.status(200).json({ status: 'Ok' });
}