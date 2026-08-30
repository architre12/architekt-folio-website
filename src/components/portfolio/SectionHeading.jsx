import MaskedHeading from '../motion/MaskedHeading';

export default function SectionHeading({ index, label, eyebrow, lines, className = '', id }) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      <div className="section-label"><span>{index}</span>{label}</div>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <MaskedHeading lines={lines} id={id} />
    </div>
  );
}
