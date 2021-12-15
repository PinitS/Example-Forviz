import React from "react";
import { useParams } from "react-router-dom";

export default function PageNotFound() {
  let { pageName } = useParams();
  return (
    <div>
      <p>page : {pageName} Not found</p>
      {/* <p>Page Not found</p> */}
    </div>
  );
}
