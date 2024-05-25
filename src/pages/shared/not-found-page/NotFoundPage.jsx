import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const [count, setCount] = useState(5);

  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      navigate("/");
    } else
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
  }, [count]);

  return (
    <>
      <h1>Oooops...</h1>
      <h3>There is nothing in here!</h3>
      <p>You will be redirected in {count} seconds to home!</p>
    </>
  );
};

export default NotFoundPage;
