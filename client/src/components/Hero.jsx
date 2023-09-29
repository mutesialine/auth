import { Link } from "react-router-dom";

export default function Hero() {
  // const [user, setUser] = useState(null);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/user");
  //     console.log(response.json().email)
  //     console.log(response,"hereee")
  //     if (response.ok) {
  //       const data = await response.json();
  //       setUser(data.user);
  //     } else {
  //       console.error(`Error: ${response.status} - ${response.statusText}`);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log(user,"okaaaaa")
  // if (!user)
  //   return <Redirect to="/login" />;

  return (
    <div className="flex gap-x-12 text-center  w-full pt-32">
      <img src="/tote.webp" className=" w-[500px]" />
      <div className="pt-12 space-y-24  text-lg">
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ex
          exercitationem sequi, ullam tenetur assumenda voluptas dicta minima
          necessitatibus voluptatibus sapiente quaerat perspiciatis dolores,
          nesciunt ipsum officiis vel quasi numquam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Necessitatibus illum fugiat autem
          dolores vel! Aut, modi incidunt blanditiis illo, accusantium sunt
          facere neque dolorum iure quas voluptates, voluptatibus inventore
          molestias?
        </h2>
        <div>
          <Link
            className=" text-white bg-yellow-700 py-4 px-6 rounded-full"
            to="/tote"
          >
            explore more
          </Link>
        </div>
      </div>
    </div>
  );
}
