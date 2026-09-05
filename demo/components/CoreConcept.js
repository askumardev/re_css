// function CoreConcept(props) {
//   return (
//     <li>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

export default function CoreConcept({ title, description }) {
  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}