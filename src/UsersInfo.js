import santhosh from './Assets/santhosh.png'

const UserInfo = ({ user }) => (
    <div className="hover:shadow-xl bg-white rounded-xl p-5 text-center">
        <img src={santhosh} className="size-40 mx-auto object-cover" alt="logo" />
        <div className="space-y-3 mt-4">
            <h2 className="text-lg font-semibold">Name: {user.name}</h2>
            <h2 className="text-lg font-semibold">Mail Id: {user.email}</h2>
            <h2 className="text-lg font-semibold">Phone Number: {user.phone}</h2>
        </div>
    </div>
);

export default UserInfo;