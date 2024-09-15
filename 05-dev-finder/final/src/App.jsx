import { useEffect, useState } from "react";
import useGitHubUser from "./hooks/useGithubUser";
import { CiSearch } from "react-icons/ci";
import GithubCard from "./components/GithubCard";

function App() {
  const [userDetails, setUserDetails] = useState({});
  const [savedUsers, setSavedUsers] = useState([]);
  const [username, setUsername] = useState("");
  const { user, loading, error } = useGitHubUser(username);

  useEffect(() => {
    const savedUsers = localStorage.getItem("saveUsers");

    if (savedUsers) {
      console.log(JSON.parse(savedUsers));
      setSavedUsers(JSON.parse(savedUsers));
    }
  }, []);

  useEffect(() => {
    console.log(user);

    if (user) {
      const {
        name,
        login,
        avatar_url,
        bio,
        public_repos,
        followers,
        following,
        created_at,
        twitter_username,
        location,
        email,
        html_url,
      } = user;

      setUserDetails({
        name,
        username: login,
        avatar: avatar_url,
        bio,
        repos: public_repos,
        followers,
        following,
        joined: new Date(created_at).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        twitter: twitter_username,
        location,
        email,
        website: html_url,
      });
    }

    if (error) {
      setUserDetails({});
    }
  }, [user, error]);

  const handleSearch = (event) => {
    event.preventDefault();
    const input = event.target.elements.username.value;

    setUsername(input);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col xl:w-[70%] gap-4">
        <h1 className="text-3xl font-semibold">devfinder.</h1>

        <form
          onSubmit={handleSearch}
          className="bg-[#1C2840] w-full p-8 outline-none rounded-xl flex gap-4 items-center"
        >
          <CiSearch className="text-white text-2xl" />
          <input
            type="text"
            name="username"
            placeholder="Search Github Username..."
            className="bg-transparent flex-grow outline-none"
          />
          <button type="submit" className="px-5 rounded-xl py-2 bg-[#0583F2]">
            Search
          </button>
        </form>

        <section className="p-8 bg-[#1C2840] rounded-xl">
          <GithubCard userDetails={userDetails} />

          {loading && <p className="text-white text-center">Loading...</p>}

          {error && <p className="text-red-500 text-center">{error}</p>}

          {savedUsers.length > 0 && (
            <div>
              <h5 className="text-2xl font-bold mb-5">Saved Profiles</h5>

              {savedUsers.map((user, index) => (
                <GithubCard key={index} userDetails={user} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
