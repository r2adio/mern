import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState([]);
  //
  // useEffect: w/ help of useEffect we can make a api call, only when this component is loaded.
  // useEffect(() => {
  //   fetch("https://api.github.com/users/r2adio")
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="Github profile pic" width={400} />
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const resp = await fetch("https://api.github.com/users/r2adio");
  return resp.json();
};
