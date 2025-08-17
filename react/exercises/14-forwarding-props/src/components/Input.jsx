export default function Input({richText, children, ...props}) {
  // return a <textarea> if a richText prop is true
  // return an <input> otherwise
  // forward / set the received props on the returned elements
  const isSetRichText = richText === undefined ? false : true;
  const element = isSetRichText ? <textarea {...props}>{children}</textarea> : <input {...props}>{children}</input>;
  return (
      <>
        {element}
      </>
);
}