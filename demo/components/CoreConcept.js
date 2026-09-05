export default function CoreConcept({ title, isActive, onSelect }) {
  return (
    <li className={isActive ? "active" : ""}>
      <button type="button" onClick={onSelect} aria-current={isActive ? "page" : undefined}>
        {title}
      </button>
    </li>
  );
}