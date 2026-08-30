import MaskedHeading from '../motion/MaskedHeading';

export default function SectionHeading({ lines, className = '', id }) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      <MaskedHeading lines={lines} id={id} />
    </div>
  );
}
