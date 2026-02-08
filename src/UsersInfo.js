import santhosh from "./Assets/santhosh1.jpeg";

const UserInfo = ({ user }) => (
  <div className="hover:shadow-xl bg-white rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 w-full h-full flex items-center">
    
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 md:gap-6 w-full">
      
      {/* IMAGE */}
      <img
        src={santhosh}
        className="size-24 sm:size-28 md:size-32 lg:size-36 xl:size-40 rounded-lg border flex-shrink-0"
        alt="User"
      />

      {/* TEXT */}
      <div className="flex flex-col justify-center text-center sm:text-left space-y-2 text-xs sm:text-sm md:text-base lg:text-lg break-words w-full">
        <h2 className="font-semibold">Name: {user.name}</h2>
        <h2 className="break-words overflow-wrap-anywhere">Mail Id: {user.email}</h2>
        <h2>Phone Number: {user.phone}</h2>
      </div>

    </div>
  </div>
);

export default UserInfo;