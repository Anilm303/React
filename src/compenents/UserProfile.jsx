import UserAddress from "./userAddress"

const UserProfile = (props) => {
    return (
        <div className="border border-slate-300 w-[300px] p-4 rounded-md mb-4 ml-4">
            <p>id: {props.id}</p>
            <p>username: {props.username}</p>
            <p>age: {props.age}</p>


        <UserAddress address={props.address}/>
        </div>
    )
}

export default UserProfile