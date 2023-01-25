import * as React from 'react';

export const ExternalLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ target, rel, href, children, ...otherProps }, ref) => {
  target = '_blank';
  rel = 'noopener noreferrer';
  return (
    <a {...{ ...otherProps, ref, target, rel, href }}>{children || href}</a>
  );
});

ExternalLink.displayName = 'ExternalLink';

export default ExternalLink;
