import React, { useEffect } from "react";
import { useRouter } from "next/router";
export default function index() {
  const { query, isReady } = useRouter();

  useEffect(() => {
    if (isReady) {
      console.log(query);
    }
  }, [query, isReady]);

  return <div>ini page detail</div>;
}
