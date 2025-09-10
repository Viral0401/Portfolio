'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type ActionResult = {
  success: boolean;
  message: string;
}

export async function submitContactForm(formData: FormData): Promise<ActionResult> {
  try {
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const subject = formData.get('subject')?.toString() || 'Contact form submission';
    const message = formData.get('message')?.toString();
    
    if (!name || !email || !message) {
      return {
        success: false,
        message: "All required fields must be filled"
      }
    }
    
    console.log('Form submission:', { name, email, subject, message });
    
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'viraldalal04@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    
    if (error) {
      console.error('Email sending error:', error);
      return { 
        success: false, 
        message: "There was a problem sending your message. Please try again." 
      };
    }
    
    return { 
      success: true, 
      message: "Your message has been sent! I'll get back to you soon." 
    };
  } catch (error) {
    console.error('Form error:', error);
    return { 
      success: false, 
      message: "There was a problem submitting your form. Please try again." 
    };
  }
}