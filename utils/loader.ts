export const myLoader = ({ src, width, quality }) => {
  return `${process.env.NEXT_PUBLIC_HOST}/${src}?w=${width}&q=${quality || 75}`;
};
