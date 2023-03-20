import { Link, useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div>
      {error.message}
      <Link to="/">
        <u>Go back</u>
      </Link>
    </div>
  );
}

export default ErrorBoundary;
