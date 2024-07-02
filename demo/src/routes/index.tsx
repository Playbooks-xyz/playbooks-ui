import { useEffect, useState } from "react";

import { useStore, useToast } from "contexts";
import { env, timeout } from "utils";
import { isEven, isOdd } from "vite-typescript-npm-package";

const IndexRoute = () => {
  const [loading, setLoading] = useState(false);
  const store = useStore();
  const toast = useToast();

  // Computed
  const number = Math.floor(Math.random() * 100);

  // Hooks
  useEffect(() => {
    if (env === "development") fetchData();
  }, []);

  // Methods
  const fetchData = async () => {
    try {
      setLoading(true);
      await timeout(1000);
      console.log("number: ", number);
    } catch (e) {
      toast.showError(e);
    } finally {
      setLoading(false);
    }
  };

  // Render
  return (
    <div className="w-full h-100vh flex-middle">
      <div className="text-center">
        <h4>{loading ? "Loading..." : "Hello there!"}</h4>
        {!loading && <p>Welcome to React / Vite / TailwindCSS.</p>}
        <p>
          The number {number} is {isEven(number) ? "even" : "odd"}.
        </p>
      </div>
    </div>
  );
};

export default IndexRoute;
