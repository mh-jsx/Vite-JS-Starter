import { Suspense } from "react";

function WithSuspense({ children }) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}

export default WithSuspense;
