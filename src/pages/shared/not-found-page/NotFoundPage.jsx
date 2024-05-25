import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  //Timer için bir useState oluşturduk
  const [count, setCount] = useState(5);
  //Belirtilen sayfaya yönlendirmesi için kullanılıyor
  const navigate = useNavigate();
  //Count her güncellendiğinde fonksiyonun çalışması için useEffect oluşturuyoruz
  useEffect(() => {
    if (count === 0) {
      //count 0'a eşit olunca navigate sayfaya yönlendiriyor
      navigate("/");
    }
    //1000 milisaniyeden sonra setCount çalışıyor
    else
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    //Her count güncellendiğinde useEffect bir daha çalışıyor
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
