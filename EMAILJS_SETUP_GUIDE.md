# EmailJS Setup Guide for GROUP3 Contact Form

This guide will help you set up EmailJS to send contact form submissions directly to marcgroup3@gmail.com.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click "Sign Up Free" and create an account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended)
4. Click "Connect Account" and authorize with marcgroup3@gmail.com
5. Name your service (e.g., "GROUP3 Contact Form")
6. Click "Create Service"
7. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Set up your template:

**Template Name:** Contact Form Submission

**To Email:** marcgroup3@gmail.com

**Subject:** New Contact from {{from_name}} - GROUP3 Website

**Content:**
```
You have received a new message from the GROUP3 website contact form:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This email was sent from the GROUP3 website contact form.
```

4. Click "Save"
5. **Copy the Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to "Account" in the dashboard
2. Under "API Keys" section, find your "Public Key"
3. **Copy the Public Key** (you'll need this)

## Step 5: Update Your Code

1. Open `src/components/Contact.tsx`
2. Replace the placeholder values at the top of the file:

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';    // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';    // Replace with your Public Key
```

3. Remove the yellow setup instructions box from the component (lines ~173-183)

## Step 6: Test Your Form

1. Fill out the contact form on your website
2. Submit it
3. Check marcgroup3@gmail.com for the email
4. Check EmailJS dashboard for sending history

## Free Plan Limits

- 200 emails per month
- 2 email templates
- Limited to 50KB per request

## Troubleshooting

- **Email not sending:** Check browser console for errors
- **"Unauthorized" error:** Verify your public key is correct
- **Template error:** Ensure all variable names match (from_name, from_email, company, message)
- **Service error:** Make sure the Gmail service is properly connected

## Security Note

The public key is safe to use in frontend code. Never expose your private key in client-side code. 