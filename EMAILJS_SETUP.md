# EmailJS Setup Guide for Contact Form

## 🎯 What This Does
Your "Get a Quote" form now has **real email functionality**! When users submit the form, it will actually send an email to your business email address.

## 📋 Prerequisites
1. **EmailJS Account** - Free tier available
2. **Email Service** - Gmail, Outlook, or other email provider
3. **Email Template** - Professional email template

## 🚀 Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended)
4. Follow the authentication steps
5. **Copy your Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **"Create New Template"**
3. Use this template content:

```html
Subject: New Quote Request from {{from_name}}

Dear Kohinoor Interiors Team,

You have received a new quote request:

👤 **Customer Details:**
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{from_phone}}

🏗️ **Project Information:**
- Project Type: {{project_type}}
- Message: {{message}}

📧 **Reply to:** {{reply_to}}

---
This email was sent from your website contact form.
```

4. **Copy your Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to **Account** → **API Keys**
2. **Copy your Public Key** (e.g., `user_def456`)

### 5. Configure Your App
Update the `src/config/emailjs.ts` file with your actual values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here', // e.g., 'service_abc123'
  TEMPLATE_ID: 'your_template_id_here', // e.g., 'template_xyz789'
  PUBLIC_KEY: 'your_public_key_here', // e.g., 'user_def456'
  // ... rest of config
};
```

### 6. Test the Form
1. Start your development server: `npm run dev`
2. Go to Contact page
3. Fill out the form and submit
4. Check your email for the quote request

## 🔧 Configuration Details

### Environment Variables (Optional)
You can also use environment variables for better security:

```bash
# .env file
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update the config:
```typescript
SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id',
```

### Email Template Variables
The form sends these variables to your email template:
- `{{from_name}}` - Customer's full name
- `{{from_email}}` - Customer's email address
- `{{from_phone}}` - Customer's phone number
- `{{project_type}}` - Type of project (Residential/Commercial/Custom)
- `{{message}}` - Customer's project description
- `{{reply_to}}` - Email address to reply to

## 📧 What Happens When Form is Submitted

1. **Form Validation** - Checks all required fields
2. **Email Validation** - Verifies email format
3. **Loading State** - Shows "Sending..." with spinner
4. **Email Sending** - Sends email via EmailJS
5. **Success Message** - Shows confirmation toast
6. **Form Reset** - Clears all form fields
7. **Error Handling** - Shows error message if email fails

## 🎨 Features Added

- ✅ **Real Email Functionality** - Actually sends emails
- ✅ **Loading States** - Shows when email is being sent
- ✅ **Form Validation** - Validates email format and required fields
- ✅ **Error Handling** - Graceful error messages
- ✅ **Success Feedback** - Confirmation when email is sent
- ✅ **Professional Template** - Well-formatted email content

## 🚨 Troubleshooting

### Email Not Sending
- Check your EmailJS configuration
- Verify Service ID, Template ID, and Public Key
- Check browser console for errors
- Ensure EmailJS service is active

### Template Variables Not Working
- Verify template syntax in EmailJS
- Check variable names match exactly
- Test template in EmailJS dashboard

### Form Validation Errors
- Check all required fields are filled
- Ensure email format is valid
- Check phone number format

## 💡 Pro Tips

1. **Test with Real Emails** - Send test emails to yourself first
2. **Monitor EmailJS Dashboard** - Check delivery status
3. **Customize Template** - Make the email match your brand
4. **Set Up Auto-Reply** - Consider automatic confirmation emails
5. **Monitor Spam** - Check spam folder for test emails

## 🔒 Security Notes

- **Public Key is Safe** - Can be exposed in frontend code
- **Service ID is Safe** - Only identifies your email service
- **Template ID is Safe** - Only identifies your email template
- **No Sensitive Data** - Only sends form data you control

Your contact form is now **fully functional** and will send real emails to your business! 🎉

## 🚀 Next Steps

1. **Set up your EmailJS account**
2. **Configure the three IDs** in the config file
3. **Test the form** with a real submission
4. **Customize the email template** to match your brand
5. **Monitor email delivery** in EmailJS dashboard

The EmailJS solution gives you **professional email delivery** without any backend server setup! 🎯
