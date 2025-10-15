# Podsite Constitution

## Core Principles

### I. Simplicity First
The application must prioritize simplicity in design and implementation. Avoid over-engineering and focus on delivering a minimal, functional static web app.

### II. Static Content Delivery
All content must be served as static files (HTML, CSS, JS) to ensure fast performance and ease of deployment. No server-side rendering or dynamic content generation is allowed.

### III. Test-First Development
Tests must be written before implementing any feature. Follow the Red-Green-Refactor cycle to ensure code quality and maintainability.

### IV. Accessibility Compliance
The app must adhere to basic accessibility standards (e.g., WCAG 2.1 Level AA) to ensure usability for all users, including those with disabilities.

### V. Versioning & Change Management
Use semantic versioning (MAJOR.MINOR.PATCH) for tracking changes. Breaking changes require a migration plan and documentation.

## Additional Constraints

### Technology Stack
- Use HTML, CSS, and JavaScript only.
- Frameworks and libraries (e.g., React, Vue) are not allowed unless explicitly approved.
- Deployment must be on a static hosting platform (e.g., GitHub Pages, Netlify).

### Performance Standards
- Page load time must be under 2 seconds on a 3G connection.
- All assets must be optimized (e.g., minified CSS/JS, compressed images).

## Development Workflow

### Code Review Process
- All code must be reviewed by at least one other developer before merging.
- Reviews must verify compliance with this constitution.

### Testing Requirements
- Unit tests are mandatory for all JavaScript functions.
- Accessibility testing must be performed before deployment.

### Deployment Approval
- Deployment requires passing all tests and a final review by the project lead.

## Governance
This constitution supersedes all other practices. Amendments require documentation, approval by the team, and a migration plan for existing code.

**Version**: 1.0.0 | **Ratified**: 2025-10-15 | **Last Amended**: 2025-10-15