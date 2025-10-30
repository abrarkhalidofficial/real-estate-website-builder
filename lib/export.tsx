import JSZip from "jszip"
import type { PageData } from "./schemas"

export async function exportAsHTML(pageData: PageData): Promise<Blob> {
  const html = generateHTML(pageData)
  const css = generateCSS()

  const zip = new JSZip()
  zip.file("index.html", html)
  zip.file("styles.css", css)

  return zip.generateAsync({ type: "blob" })
}

export async function exportAsReact(pageData: PageData): Promise<Blob> {
  const zip = new JSZip()

  // Page component
  const pageComponent = generatePageComponent(pageData)
  zip.file("Page.tsx", pageComponent)

  // Page data
  zip.file("pageData.json", JSON.stringify(pageData, null, 2))

  // README
  const readme = `# Real Estate Website

This is an exported real estate website built with the Real Estate Builder.

## Usage

1. Install dependencies: \`npm install\`
2. Copy this folder to your Next.js project
3. Import and use the Page component

## Components

- \`Page.tsx\` - Main page component
- \`pageData.json\` - Page configuration and content
`
  zip.file("README.md", readme)

  return zip.generateAsync({ type: "blob" })
}

function generateHTML(pageData: PageData): string {
  const sections = pageData.sections
    .map((section) => {
      switch (section.type) {
        case "hero":
          return `
    <section class="hero" style="background-image: url('${section.bgSrc}'); background-size: cover; background-position: center; padding: 120px 20px; text-align: center; color: white;">
      <div style="background: rgba(0,0,0,${section.overlayOpacity}); padding: 40px;">
        <h1>${section.heading}</h1>
        <p>${section.subheading}</p>
        <a href="${section.ctaHref}" class="btn">${section.ctaLabel}</a>
      </div>
    </section>
          `
        case "listings":
          return `
    <section class="listings" style="padding: 60px 20px;">
      <h2>${section.title}</h2>
      <div class="grid">
        ${section.properties
          .map(
            (prop) => `
        <div class="property-card">
          <img src="${prop.images[0]}" alt="${prop.title}" style="width: 100%; height: 250px; object-fit: cover;">
          <h3>${prop.title}</h3>
          <p>${prop.description}</p>
          <p class="price">$${prop.price.toLocaleString()}</p>
          <p class="location">${prop.location}</p>
          ${prop.bedrooms ? `<p>${prop.bedrooms} Beds | ${prop.bathrooms} Baths</p>` : ""}
          <p class="features">${prop.features.join(", ")}</p>
        </div>
        `,
          )
          .join("")}
      </div>
    </section>
          `
        case "about":
          return `
    <section class="about" style="padding: 60px 20px; display: flex; gap: 40px; align-items: center;">
      <div style="flex: 1;">
        <h2>${section.title}</h2>
        <p>${section.content}</p>
      </div>
      <img src="${section.image}" alt="${section.title}" style="flex: 1; max-width: 400px; border-radius: 8px;">
    </section>
          `
        case "faq":
          return `
    <section class="faq" style="padding: 60px 20px; max-width: 800px; margin: 0 auto;">
      <h2>${section.title}</h2>
      ${section.items
        .map(
          (item) => `
      <details style="margin: 20px 0; padding: 15px; border: 1px solid #ddd; border-radius: 4px;">
        <summary style="cursor: pointer; font-weight: bold;">${item.question}</summary>
        <p style="margin-top: 10px;">${item.answer}</p>
      </details>
      `,
        )
        .join("")}
    </section>
          `
        case "testimonials":
          return `
    <section class="testimonials" style="padding: 60px 20px; background: #f5f5f5;">
      <h2>${section.title}</h2>
      <div class="grid">
        ${section.items
          .map(
            (item) => `
        <div class="testimonial-card" style="padding: 20px; background: white; border-radius: 8px;">
          ${item.image ? `<img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; border-radius: 50%; margin-bottom: 10px;">` : ""}
          <p>"${item.content}"</p>
          <p style="font-weight: bold; margin-top: 10px;">${item.name}</p>
          <p style="color: #666; font-size: 14px;">${item.role}</p>
        </div>
        `,
          )
          .join("")}
      </div>
    </section>
          `
        case "portal":
          return `
    <section class="portal" style="padding: 60px 20px; background: #f9f9f9; text-align: center;">
      <h2>${section.title}</h2>
      <p>${section.subtitle}</p>
      <form style="max-width: 500px; margin: 30px auto;">
        <input type="text" placeholder="Your Name" required style="width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 4px;">
        <input type="email" placeholder="Your Email" required style="width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 4px;">
        <textarea placeholder="Your Message" required style="width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 4px; min-height: 120px;"></textarea>
        <button type="submit" class="btn" style="width: 100%; padding: 12px; background: #000; color: white; border: none; border-radius: 4px; cursor: pointer;">Send Message</button>
      </form>
    </section>
          `
        default:
          return ""
      }
    })
    .join("\n")

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageData.seo?.title || pageData.name}</title>
  <meta name="description" content="${pageData.seo?.description || ""}">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    ${sections}
  </main>
</body>
</html>`
}

function generateCSS(): string {
  return `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
}

main {
  width: 100%;
}

section {
  width: 100%;
}

h1, h2, h3 {
  margin-bottom: 20px;
}

h1 {
  font-size: 48px;
}

h2 {
  font-size: 36px;
}

h3 {
  font-size: 24px;
}

p {
  margin-bottom: 15px;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background: #000;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  font-size: 16px;
}

.btn:hover {
  background: #333;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.property-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}

.property-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.property-card h3 {
  padding: 15px 15px 0;
}

.property-card p {
  padding: 0 15px;
}

.property-card .price {
  font-size: 24px;
  font-weight: bold;
  color: #000;
}

.property-card .location {
  color: #666;
  font-size: 14px;
}

.property-card .features {
  font-size: 12px;
  color: #999;
  padding-bottom: 15px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 24px;
  }

  .grid {
    grid-template-columns: 1fr;
  }
}`
}

function generatePageComponent(pageData: PageData): string {
  return `'use client';

import React from 'react';
import pageData from './pageData.json';

export default function Page() {
  return (
    <main className="w-full">
      {/* This is a placeholder component. Implement rendering based on pageData.sections */}
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">{pageData.name}</h1>
        <p className="text-gray-600">
          This is an exported page from the Real Estate Builder.
          Implement section rendering based on the pageData.json file.
        </p>
      </div>
    </main>
  );
}`
}
