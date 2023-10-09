import Totecard from "../components/Totecard";
import { useEffect, useState } from "react";

export default function Tote() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await fetch("http://localhost:3000/item", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      const items = await resp.json();
      setData(items);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="space-y-4 pt-6">
      <a href="/" className="text-4xl">
        A
      </a>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2 text-black">
        {data.map((el) => (
          <Totecard {...el} key={el._id} />
        ))}
      </div>
    </div>
  );
}
