// Images
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
// PDF
declare module '*.pdf'
// Text
declare module '*.md' {
  const content: any;
  export default content;
}
