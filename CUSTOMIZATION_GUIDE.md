# Portfolio Customization Guide

This guide will help you customize your medical systems engineer portfolio with your own information.

## Quick Start Checklist

- [ ] Update personal information
- [ ] Customize hero section
- [ ] Add your bio and achievements
- [ ] Replace project examples
- [ ] Update skills and certifications
- [ ] Add publications and patents
- [ ] Configure contact form
- [ ] Add your images
- [ ] Test and deploy

## Step 1: Update Personal Information

Open [lib/constants.ts](lib/constants.ts) and update the `PERSONAL_INFO` section:

```typescript
export const PERSONAL_INFO = {
  name: "Your Full Name",
  title: "Systems Engineer",
  subtitle: "Medical Product Development & Innovation",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "City, State",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourprofile",
};
```

## Step 2: Customize Hero Section

In the same file, update the `HERO` section:

```typescript
export const HERO = {
  headline: "Your Custom Headline",
  description: "Your professional summary that highlights your expertise",
  cta: "View My Work",
};
```

## Step 3: Update About Section

Customize the `ABOUT` section with your information:

```typescript
export const ABOUT = {
  title: "About Me",
  description: "Write your professional bio here...",
  highlights: [
    "Your key expertise area 1",
    "Your key expertise area 2",
    "Your key expertise area 3",
    // Add more as needed
  ],
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "25+", label: "Projects Completed" },
    { value: "15+", label: "Certifications" },
    { value: "98%", label: "Compliance Rate" },
  ],
};
```

## Step 4: Add Your Projects

Replace the example projects with your actual work:

```typescript
export const PROJECTS = [
  {
    id: 1,
    title: "Your Project Name",
    category: "AI Systems", // or "Hardware/Software", "Embedded Systems", "Regulatory Design"
    description: "Detailed description of your project...",
    technologies: ["Tech1", "Tech2", "Tech3"],
    achievements: [
      "Key achievement 1",
      "Key achievement 2",
      "Key achievement 3",
    ],
    image: "/images/projects/project1.jpg",
  },
  // Add more projects
];
```

## Step 5: Update Skills

Customize your skills and proficiency levels:

```typescript
export const SKILLS = {
  categories: [
    {
      name: "Systems Engineering",
      skills: [
        { name: "Skill Name", level: 95 }, // level out of 100
        // Add more skills
      ],
    },
    // Add more categories
  ],
};
```

## Step 6: Add Publications & Certifications

### Publications/Patents:

```typescript
export const PUBLICATIONS = [
  {
    id: 1,
    type: "patent", // or "paper"
    title: "Your Patent/Paper Title",
    number: "US Patent 10,123,456", // for patents
    journal: "Journal Name", // for papers
    date: "2023",
    description: "Brief description...",
    link: "https://link-to-publication.com",
  },
  // Add more
];
```

### Certifications:

```typescript
export const CERTIFICATIONS = [
  {
    name: "Certification Name",
    issuer: "Issuing Organization",
    year: "2023",
  },
  // Add more
];
```

## Step 7: Add Images

### Profile Image
1. Add your profile image to `public/images/profile/`
2. Update the About component to use your image

### Project Images
1. Add project screenshots to `public/images/projects/`
2. Update the image paths in the PROJECTS array

### Certification Badges
1. Add certification badges to `public/images/certifications/`

## Step 8: Configure Contact Form

To enable email notifications, update [app/actions/contact.ts](app/actions/contact.ts):

### Option 1: Using Resend (Recommended)

```bash
npm install resend
```

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  // ... validation code ...

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: PERSONAL_INFO.email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    // ... error handling ...
  }
}
```

### Option 2: Using SendGrid

```bash
npm install @sendgrid/mail
```

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function submitContactForm(formData: FormData) {
  // ... validation code ...

  try {
    await sgMail.send({
      to: PERSONAL_INFO.email,
      from: 'your-verified-sender@example.com',
      subject: `Portfolio Contact: ${subject}`,
      text: message,
      html: `<p>${message}</p>`,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    // ... error handling ...
  }
}
```

Add environment variables to `.env.local`:

```env
RESEND_API_KEY=your_api_key_here
# or
SENDGRID_API_KEY=your_api_key_here
```

## Step 9: Customize Colors (Optional)

If you want to change the color scheme, update [app/globals.css](app/globals.css):

```css
:root {
  --medical-teal: #14B8A6;      /* Change to your brand color */
  --medical-cyan: #06B6D4;      /* Secondary color */
  --medical-purple: #A855F7;    /* Accent color */
  /* ... other colors ... */
}
```

## Step 10: Test Your Portfolio

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000 in your browser

3. Test all sections:
   - [ ] Navigation works smoothly
   - [ ] All animations play correctly
   - [ ] Forms submit successfully
   - [ ] Mobile responsive design works
   - [ ] Links work correctly

## Step 11: Build for Production

```bash
npm run build
npm start
```

Test the production build locally before deploying.

## Step 12: Deploy

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables (if using email service)
5. Deploy!

### Environment Variables on Vercel

Go to Project Settings → Environment Variables and add:
- `RESEND_API_KEY` or `SENDGRID_API_KEY`
- Any other API keys you're using

## Tips for Success

1. **Use high-quality images**: Compress them for web use
2. **Write clear descriptions**: Focus on impact and results
3. **Keep it updated**: Regularly add new projects and certifications
4. **Test on multiple devices**: Ensure it looks good everywhere
5. **Optimize performance**: Use Next.js Image component for all images

## Need Help?

- Check the main [README.md](README.md) for more information
- Review Next.js documentation: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- Framer Motion docs: https://www.framer.com/motion/

## Common Issues

### Fonts not loading
- Make sure you have an active internet connection during development
- Fonts are loaded from Google Fonts API

### Images not showing
- Check that image paths are correct
- Images should be in the `public/` directory
- Use `/images/...` paths (not `public/images/...`)

### Contact form not sending emails
- Make sure you've configured an email service
- Check that environment variables are set correctly
- Test API keys are valid

---

Happy customizing! 🚀
