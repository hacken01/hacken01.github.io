# Quick Start Guide

## 🚀 Getting Your Site Live

### Automatic Deployment (Recommended)

Your site is automatically deployed to GitHub Pages when you push to the `main` branch.

1. **Push your changes to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Click on "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"
   - Your site will be live at `https://hacken01.github.io`

### Local Development

If you want to preview locally:

1. **Install Ruby dependencies** (requires Ruby installed):
   ```bash
   bundle install
   ```

2. **Serve locally:**
   ```bash
   bundle exec jekyll serve
   ```

3. **Visit:** http://localhost:4000

## 📝 Customization Guide

### Change Site Info
Edit `_config.yml`:
- `title`: Your site title
- `description`: Site description
- `navigation`: Add/edit menu items

### Update Content
- **Homepage**: `index.md`
- **About**: `about.md`
- **Portfolio**: `portfolio.md` - Replace placeholder images and add your projects
- **Contact**: `contact.md`

### Change Colors
Edit `_sass/variables.scss`:
```scss
$primary-color: #2563eb;    // Main brand color
$secondary-color: #8b5cf6;  // Secondary color
$accent-color: #ec4899;     // Accent color
```

### Add Your Profile Picture
Replace the placeholder in `index.md`:
```markdown
<img src="your-image-url-or-path" alt="Profile" class="about-image" />
```

### Update Social Links
Edit `_includes/footer.html` and update the social media links.

## 🎨 Features Included

✅ Responsive navigation with mobile menu
✅ Hero section with animated background
✅ Portfolio grid layout
✅ Contact form
✅ Smooth scrolling and animations
✅ SEO optimized
✅ Fast loading

## 📱 Customization Tips

1. **Add more pages**: Create new `.md` files with front matter
2. **Change fonts**: Update the Google Fonts in `_includes/head.html`
3. **Add blog**: Create posts in `_posts/` directory
4. **Modify styles**: Edit `assets/css/custom.css`

## 🐛 Troubleshooting

If GitHub Pages build fails:
- Check the Actions tab for error messages
- Ensure all front matter in markdown files is correct
- Make sure `_config.yml` is valid YAML

## 📚 Resources

- [Jekyll Docs](https://jekyllrb.com/docs/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)

Happy coding! 🎉

