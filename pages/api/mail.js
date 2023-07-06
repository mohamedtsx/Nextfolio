const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
    const body = JSON.parse(req.body);
    
    const message = `
        Dear ${body.name}, \r\n\r\n
        Thank you for contacting us. \r\n\r\n
        We received your message through our contact form and appreciate you getting in touch. \r\n
        We look forward to discussing how we can be of service to meet your needs. \r\n
        Please feel free to provide any additional details you'd like us to know. We will respond promptly to any follow up questions you have. \r\n\r\n
        Best regards,\r\n\r\n
        Mohamed Khalid
    `;

    const data = {
        to: body.email,
        from: 'mohamed@khalidjs.com',
        subject: 'Thank you',
        text: message,
        html: message.replace(/\r\n/g, '<br>' )
    }

    // notify myself by an active mail
    const notify = `
        Name: ${body.name}, \r\n
        Email: ${body.email}, \r\n
        Message: ${body.message}
    `

    const newRequest = {
        to: 'mohamed.tsx@gmail.com',
        from: 'mohamed@khalidjs.com',
        subject: 'new contact request',
        text: notify,
        html:  notify.replace(/\r\n/g, '<br>' )
    }
    // --------------------------------

    
    try {
        mail.send(data);
        mail.send(newRequest);
        res.status(200).json({ status: 'Ok' });
    } catch(error) {
        if (error.toString().includes('401')) {
            res.status(401).json({ error: 'Invalid API key' });
        } else if (error.toString().includes('Invalid email address')) {
            res.status(400).json({ error: 'Invalid email address' });  
        } else if (error.toString().includes('too many requests')) {
            res.status(429).json({ error: 'Rate limit exceeded' });     
        } else {
            res.status(500).json({ error: error.toString() });
        }
    } 



}







