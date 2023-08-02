import { NextRequest, NextResponse } from "next/server"
import nodemailer from 'nodemailer'


export async function GET(req: NextRequest) {
    return new Response('response successfull!')
}

export async function POST(req: NextRequest) {

    // Fetch data from contact form
    const data = await req.json()
    
    // Initialize the configs for nodemailer
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GAMIL_USER,
            pass: process.env.GMAIL_PASSWORD
        }
    })

    // the template for contacts
    const template = {
        from: data.email,
        to: 'haseakito@gmail.com',
        subject: `Contact from ${ data.name }`,
        text: `${ data.details } Send from ${ data.name }`,
        html:
        `
        <p>Name</p>
        ${ data.name }
        <p>Email Address</p>
        ${ data.email }
        <p>Details<p/>
        ${ data.details }
        `
    }

    try {
        transporter.sendMail(template)
        return NextResponse.json('Your contact sent succcessfully!' , {
            status: 200
        })
    }
    catch(error) {
        console.log(error)
        return NextResponse.json('Your contact unsuccessfully sent', {
            status: 500
        })
    }
}