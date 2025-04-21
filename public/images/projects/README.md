# Project Images Directory

This directory is for project images that can be referenced in the `projects.json` file.

## How to Use

1. Add your project image to this directory
2. In your `data/projects.json` file, add the image path to the project entry:

```json
{
  "title": "Your Project Title",
  "description": "Project description",
  "tech": ["Tech1", "Tech2"],
  "github": "https://github.com/username/project",
  "demo": "https://project-demo.example.com",
  "image": "/images/projects/your-image-filename.jpg"
}
```

3. If an image path is provided, it will be displayed. If not, a stylized preview will be automatically generated based on the project's tech stack.

## Image Recommendations

- Use images with 16:9 or 4:3 aspect ratio for best results
- Recommended size: 800x450px or 1200x675px
- Supported formats: JPG, PNG, WebP, GIF
- Keep file sizes under 200KB for optimal loading performance