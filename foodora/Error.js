import { useRouteError} from "react-router-dom";


const Error = () => {
	const err = useRouteError();
  return (
    <div className="error">      
      <h1>OOOPS!!!</h1>
      <h2>Something went Wrong</h2>
    </div>
  );
};

export default Error;