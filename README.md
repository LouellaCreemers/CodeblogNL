# CodeBlog.nl - Project Foundation

CodeBlog.nl is a Dutch-language blog platform focusing on .NET, C#, Azure, and VueJS. While this README is in English to assist international developers, please note that the primary content and community are Dutch-speaking.

## Technology Stack

- **Nuxt 4**: Modern framework for Vue.js applications.
- **Nuxt UI**: UI component library based on Tailwind CSS.
- **Tailwind CSS**: For utility-first styling.
- **TypeScript**: For type-safe development.
- **Nuxt Content**: For managing blog posts and author profiles.

## Accessibility (WCAG 2.2 AA)

- **Skip link**: Included for keyboard users to jump directly to the main content.
- **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<article>`, and `<footer>`.
- **Focus states**: Clearly visible on all interactive elements.
- **Contrast**: Colors chosen to meet contrast requirements in both light and dark modes.

## Contributing

We welcome contributions! To keep this README clean, all instructions on how to add blog posts, authors, or images can be found in our contribution guide:

👉 **[Read the Contributing Guide (Dutch)](./CONTRIBUTING.md)**

## Getting Started

### Manual Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Using Docker
If you have Docker installed, you can run the development environment without installing Node.js locally:

```bash
# Build the image
docker build -t codeblog-dev -f Dockerfile.dev .

# Start the container
# Windows (PowerShell)
docker run -it --rm -p 3000:3000 -v ${PWD}:/app codeblog-dev

# Linux/Mac
docker run -it --rm -p 3000:3000 -v $(pwd):/app codeblog-dev
```

The website will be available at `http://localhost:3000`.
