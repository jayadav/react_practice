import withLoader from "../../hoc/WithLoder"
import DataLoader from "../util/data"
import { fetchFunc } from "../util/fetchFunc"
const api="users?limit=10"
const UserDataLoader = withLoader(DataLoader, api, fetchFunc, 'user_list')
const UserLists = ()=>{

    return <>
    <p>User</p>
     <UserDataLoader />
    </>
}

export default UserLists;