module.exports = (eleventyConfig) => {
  return {
    templateFormats: [
      "liquid",
      "svg",
      "css"
    ],
    passthroughFileCopy: true
  }
}