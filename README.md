# Artifact Document: Coding Conventions for the ShortLet Next.js Facade Project.

## Introduction

This document outlines the coding conventions for a Next.js project using the app directory. These conventions are designed to promote consistency, maintainability, and scalability across the project.

## General Conventions

### File Naming

Use consistent naming conventions for files, including PascalCase for components, camelCase for functions and variables, and kebab-case for file names.

### Indentation

Use consistent indentation throughout the project, preferably using tabs over spaces. **Four** spaces per indentation level are recommended.

### Comments

Use comments to explain complex code sections and non-obvious logic. Avoid excessive comments that restate the code itself.

### Code Style

Follow a consistent code style, such as Airbnb or Google JavaScript Style Guide.

## App Directory Structure

The app directory should be structured to reflect the project's route structure. Nested folders within the app directory represent route segments, and each folder should contain the corresponding page component for that route.

## Routing

### File-Based Routing

Utilize Next.js's file-based routing mechanism to map routes to page components.

### Nested Routes

For nested routes, create nested folders within the `app` directory. Each nested folder represents a sub-route, and the corresponding page component should reside within that folder.

### Route Groups and Private Folders

Use index.js files to represent route groups and `_` prefix for private folders.

### Parallel and Intercepted Routes

Handle parallel and intercepted routes using dynamic routing and custom **\_app.js** or **\_error.js** components.

## Metadata File Conventions

### Head Metadata

Use layout.tsx files within each folder to define head metadata for corresponding routes.

### Global Metadata

Define global metadata in **\_app.js** or **\_document.js** components.

## App Icons and Images

### Favicon

Place favicon files in the layout.tsx file.

### Open Graph and Twitter Images

Store Open Graph and Twitter images in the public directory.

## SEO

### Title and Meta Tags

Use title and meta tags within page components and layout.tsx files to manage SEO information.

### Dynamic SEO

Implement dynamic SEO strategies using getStaticProps or getServerSideProps data fetching methods.

## API Calls

### Data Fetching

Use `getStaticProps`, `getServerSideProps`, or `useSWR` to fetch data for page components.

### API Clients

Utilize API client libraries or custom fetch methods to make API calls.

## Component Reusability

### Component Libraries

Utilize Antd (Ant Design) component libraries for consistent design.

### Component Composition

Compose components to build complex UI structures.

### Styling

- Apply consistent styling rules across components using TailwindCSS, or when not applicable, CSS modules.
- Maintain rem units over px units, and prefer to use existing tailwind classes, over arbitrary values.

## Additional Considerations

### Version Control

- Use Git to track changes and collaborate effectively. Endeavour to allow each commit address a particular issue.
- Create branches appropriately for git control. Pull requests should be made into the dev branch.

### Linting and Testing

Implement linting and testing tools to ensure code quality and maintainability.

### Documentation

Document code and APIs to improve understanding and maintainability.

### Performance Optimization

Implement performance optimization techniques to ensure a fast and responsive user experience.
