import PropTypes from "prop-types";
import { CiLocationOn, CiMail, CiTwitter, CiLink } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function GithubCard({ userDetails }) {
  if (!userDetails || Object.keys(userDetails).length === 0) return null;

  const notify = (message) => toast(message);

  return (
    <div className="flex gap-12">
      <img
        src={userDetails.avatar}
        alt="profile picture"
        className="w-[200px] h-[200px] object-cover rounded-full"
      />
      <div className="py-7 w-full">
        <div className="flex justify-between w-full">
          <div>
            <h2 className="text-4xl font-bold">{userDetails.name}</h2>
            <p className="text-[#0583F2]">@{userDetails.username}</p>
          </div>

          <div>
            <button
              onClick={() => {
                const existingUsers =
                  JSON.parse(localStorage.getItem("saveUsers")) || [];

                // Check if the user already exists by website
                const userExists = existingUsers.some(
                  (user) => user.website === userDetails.website
                );

                if (userExists) {
                  notify("User already saved");
                }

                if (!userExists) {
                  existingUsers.push(userDetails);
                  localStorage.setItem(
                    "saveUsers",
                    JSON.stringify(existingUsers)
                  );

                  window.location.reload();
                }
              }}
              className="bg-[#0583f2] w-full py-2 mb-4 rounded-xl"
            >
              Save
            </button>
            <p>{userDetails.joined}</p>
          </div>
        </div>

        <div className="my-7">
          <p>{userDetails.bio}</p>
        </div>

        <div className="grid grid-cols-3 p-6 rounded-xl bg-[#111826]">
          <div className="flex flex-col gap-1">
            <h3 className="font-light text-xl text-gray-300">Repos</h3>
            <p className="text-2xl font-bold">{userDetails.repos}</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-light text-xl text-gray-300">Followers</h3>
            <p className="text-2xl font-bold">{userDetails.followers}</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-light text-xl text-gray-300">Following</h3>
            <p className="text-2xl font-bold">{userDetails.following}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-7 gap-4">
          <div className="flex gap-4">
            <CiLocationOn className="text-2xl" />
            <p>{userDetails.location}</p>
          </div>
          <div className="flex gap-4">
            <CiMail className="text-2xl" />
            <p>{userDetails.email ? userDetails.email : "Not available"}</p>
          </div>
          <div className="flex gap-4">
            <CiLink className="text-2xl" />
            <a href={userDetails.website}>{userDetails.website}</a>
          </div>
          <div className="flex gap-4">
            <CiTwitter className="text-2xl" />
            <p>{userDetails.twitter ? userDetails.twitter : "Not available"}</p>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

GithubCard.propTypes = {
  userDetails: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    bio: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
    twitter: PropTypes.string,
    repos: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number,
    joined: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

export default GithubCard;
