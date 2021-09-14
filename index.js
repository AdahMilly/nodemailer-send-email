const express = require("express")
const sendEmail = require("./server")

const app = express()

app.get("/", (req,res) => {
    res.send("Welcome to sending emails using nodemailer")
})

app.get('/send', async (req, res) =>{

    const message ={
        from: 
        {
            name: 'Mildred Ochieng',
            address: 'mildredanyangoochieng@outlook.com'
        },
        to: 'oamildred@gmail.com',
        subject: 'Test Driven Development',
        html: `
        <div>
            <h2 style="color: white">Hi Mildred,</h2>
            <p style="color: black; font-size:25px;">Have you tried test driven development before?</p>
            <img style="width:300px; height:250px" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kaizenko.com%2Fwhat-is-test-driven-development-tdd%2F&psig=AOvVaw12Tx_GR6m8MnjuONfMw6zo&ust=1631628866131000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIivw6qR_PICFQAAAAAdAAAAABAD" alt="TDD" />
        
        </div>
        `,
        attachments:[
            {
                filename:'TDD.text',
                content: 'Try test driven development in your next project'
            }
        ]
    }
    try {
        await sendEmail(message)
        res.send('Email sent');
        
    } catch (error) {
        console.log(error);
        res.send('Error, sending email. Try again')
        
    }

})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`App running on port ${PORT}`) })