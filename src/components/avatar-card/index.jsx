import { useEffect, useState } from "react";
import axios from "axios";

const AvatarCard = (props) => {
  const { style } = props;
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const username = "dafaTyo";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUser(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Skeleton loader component
  const SkeletonAvatar = () => (
    <div className="w-full flex flex-col items-center animate-pulse">
      <div className="w-24 h-24 rounded-full bg-gray-200 mb-8 ring-4 ring-gray-100 ring-offset-2"></div>
      <div className="h-6 bg-gray-200 rounded w-40 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-64 mb-4"></div>
      <div className="h-8 bg-gray-200 rounded w-36"></div>
    </div>
  );

  return (
    <div className={`${style} bg-white rounded-lg grid place-items-center py-8 shadow-lg`}>
      {loading ? (
        <SkeletonAvatar />
      ) : (
        <>
          <div className="w-24 h-24 rounded-full bg-[#E3E3ED] mb-8 ring-4 ring-[#E3E3ED] ring-offset-2">
            <img className="rounded-full w-full" src={user.avatar_url} alt={user.name} />
          </div>
          <h1 className="text-2xl font-bold text-gray-600">{user.name}</h1>
          <p className="text-gray-400">{user.bio}</p>
          <button 
            onClick={() => window.open("/resume.pdf", "_blank")} 
            className="mt-4 bg-transparent border border-gray-400 px-3 py-1.5 rounded-md text-gray-500 text-xs font-semibold hover:bg-gray-400 hover:text-white transition duration-500"
          >
            Download Resume
          </button>
        </>
      )}
    </div>
  );
};

export default AvatarCard;