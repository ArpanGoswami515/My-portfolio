# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Smooth scrolling, hover effects, and dynamic content
- **Contact Form**: Built-in contact form for easy communication
- **Social Links**: Quick access to your social media profiles
- **Project Showcase**: Display your best work with project cards
- **Skills Section**: Highlight your technical abilities
- **About Section**: Tell your story with animated statistics

## Sections

1. **Hero Section**: Eye-catching introduction with your name and role
2. **About**: Share your background and experience
3. **Skills**: Display your technical expertise
4. **Projects**: Showcase your portfolio work
5. **Contact**: Contact form and information

## Customization

### Personal Information

Edit the following in `index.html`:

- **Name**: Replace "Your Name" in the hero section
- **Title**: Update "Full Stack Developer & Designer" to your role
- **Email**: Change "your.email@example.com" to your actual email
- **Phone**: Update "+1 (555) 123-4567" to your phone number
- **Location**: Change "Your City, Country" to your location
- **Social Links**: Update the `href` attributes in social links sections

### Projects

Add your own projects by editing the project cards in the Projects section:

```html
<div class="project-card">
    <div class="project-image">
        <!-- Add your project image or icon -->
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span class="tag">Tech 1</span>
            <span class="tag">Tech 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">Code</a>
            <a href="#" class="project-link">Live Demo</a>
        </div>
    </div>
</div>
```

### Skills

Modify the skills section to include your own technologies by editing the skill cards.

### Colors

Change the color scheme by updating CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #22d3ee;
    /* Add more custom colors */
}
```

### Images

Replace placeholder icons with actual images:

1. Add images to an `images/` folder
2. Update the image placeholders in HTML:
   ```html
   <img src="images/your-photo.jpg" alt="Your Name">
   ```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Interactive features and animations
- **Font Awesome**: Icon library

## File Structure

```
portfolio-website/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md          # Documentation
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Setup

1. Download or clone the repository
2. Open `index.html` in your web browser
3. Customize the content to match your information
4. Deploy to your hosting service

## Deployment

You can deploy this website to various platforms:

- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Drag and drop deployment
- **Vercel**: Fast and easy deployment
- **Traditional Hosting**: Upload files via FTP

### GitHub Pages Deployment

1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select your branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

## Contact Form

The contact form currently shows an alert. To make it functional:

1. Use a backend service (Node.js, PHP, etc.)
2. Use a form service like Formspree, Netlify Forms, or EmailJS
3. Implement email sending functionality

### Example with Formspree:

```html
<form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
    <!-- form fields -->
</form>
```

## Performance Optimization

- Minimize CSS and JavaScript files for production
- Optimize images (use WebP format)
- Enable caching
- Use a CDN for Font Awesome

## Future Enhancements

- [ ] Add a blog section
- [ ] Implement dark/light mode toggle
- [ ] Add more animations
- [ ] Include testimonials section
- [ ] Add project filtering
- [ ] Integrate with a CMS

## License

This project is open source and available for personal and commercial use.

## Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: System fonts for optimal performance

## Support

For questions or issues, please open an issue on GitHub or contact me directly.

---

**Made with ❤️ by [Your Name]**
