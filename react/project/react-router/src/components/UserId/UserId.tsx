import { useParams } from "react-router-dom";

function UserId() {
  const { userid } = useParams();

  return (
    <div className="bg-gray-600 text-white text-3xl p-4 flex justify-center">
      User id: {userid}
    </div>
  );
}

export default UserId;
