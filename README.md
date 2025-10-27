# Hacken01 - Custom GitHub Pages Site

A modern, responsive portfolio website built with Jekyll and custom-styled based on the Architect theme.

## Features

- 🎨 Modern and responsive design
- 🚀 Fast and lightweight
- 📱 Mobile-friendly
- ✨ Smooth animations and interactions
- 🎯 SEO optimized
- 📝 Easy to customize

## Getting Started

### Prerequisites

- Ruby (>= 2.4)
- RubyGems
- Bundler

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hacken01/hacken01.github.io.git
   cd hacken01.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Build and serve locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser and visit:
   ```
   http://localhost:4000
   ```

## Customization

### Site Configuration

Edit `_config.yml` to customize:
- Site title and description
- Navigation menu
- Google Analytics
- Theme colors (in `_sass/variables.scss`)

### Content

- **Homepage**: `index.md`
- **About Page**: `about.md`
- **Portfolio**: `portfolio.md`
- **Contact**: `contact.md`

### Styling

- Main stylesheet: `assets/css/main.css`
- Custom styles: `assets/css/custom.css`
- Variables: `_sass/variables.scss`

### JavaScript

Custom interactive features are in `assets/js/main.js`.

## Deployment

This site is automatically deployed to GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
# Build the site
bundle exec jekyll build

# The generated site will be in the _site directory
```

## Technologies Used

- **Jekyll** - Static site generator
- **SCSS** - CSS preprocessor
- **JavaScript** - Interactive features
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

- GitHub: [@hacken01](https://github.com/hacken01)
- Website: [hacken01.github.io](https://hacken01.github.io)
