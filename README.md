<!-- PROJECT HEADER -->
<br />
<p align="center">
  <a href="https://z2lai.github.io/">
    <img src="logo.png" alt="" width="80" height="80">
  </a>
  <h3 align="center">Portfolio Website</h3>
  [![LinkedIn][https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555]][https://www.linkedin.com/in/zheng-lai-9a30808b/]
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li><a href="#design">Design</a></li>
    <li><a href="#optimization">Optimization</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Design

I built this single-page portfolio website for potential employers to be able to quickly scan through my projects and my background.
My design includes three sections: Home/hero section, Projects section and About section.

- For the hero, I chose an image of a dark mountain top to convey a sense of mystery and entice the audience to explore further. As with all text on hero images, the challenge was making the text stand out. To emphasize my name and tagline, I created negative space using a particle effect and I decreased the lightness and contrast of the image. The latter also allowed for further compression of the image without affecting the perceived quality. Lastly, I included a quick transition on page load to decrease the perceived loading time.
- The challenge in the Projects section was designing a consistent visual hierarchy for my two project subsections which differ in amount of content and image sizes. I made sure that the two subsections followed the same structure and also excluded modals to simplify navigation. Additionally, I used shadows to create visual dividers through elevation, along with middle dividers.
- For the About section, I continued with the theme of the hero image by using a bright mountain-to-sea background image to reflect my broad background. I wanted the curved section divider at the start of the section to make the audience feel like they are still only peering through a window to get to know me. Lastly, I provide a call to action at the end using big buttons to direct potential employers to my contact information or other platforms to contact me through.

## Optimization

[![Mobile Lighthouse Scores][mobile-lighthouse-scores.jpg]](https://z2lai.github.io/)

## Built With

- []()
- []()
- []()

## Acknowledgements

- []()
- []()
- []()

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/zheng-lai-9a30808b/

## Guidelines

- Name Blocks, Elements and Modifier classes using Semantic Names instead of Utility Names if possible (e.g. page-section--About instead of page-section--top-margin-large)
- Add modifiers before adding new block
- Use wrapper classes for layout (prefixed with "l-") OR mixes where layout is controlled by parent (with a block element class) and block classes never have layout styles
- Add block classes to HTML according to semantic structure (e.g. each article/section should have a subsection wrapper class for layout)

## Components/Blocks

- button
- device
- feature
- icon-list
- large-hero
- link
- page-section
- section-title
- subsection
- subsection-title
- subsection-subtitle
- site-header
- primary-nav
- site-footer
- testimonials

Layout Wrappers:

- wrapper
- flex-column
- flex-row

Container (for nested tags):

- genetic-content-container

CSS Property Sort Order (based on flow):

- Content
- Display
- Position - followed by position details (top, left, etc.)
- margin
- width
- height
- border
- padding
- overflow
- font-size
- line-height
  ...decorative styling
- transform
- opacity
- z-index
