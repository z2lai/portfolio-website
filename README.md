Guidelines:
- Name Blocks, Elements and Modifier classes using Semantic Names instead of Utility Names if possible (e.g. page-section--About instead of page-section--top-margin-large)
- Add modifiers before adding new block
- Use wrapper classes for layout (prefixed with "l-") OR mixes where layout is controlled by parent (with a block element class) and block classes never have layout styles
- Add block classes to HTML according to semantic structure (e.g. each article/section should have a subsection wrapper class for layout)

Components/Blocks:
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