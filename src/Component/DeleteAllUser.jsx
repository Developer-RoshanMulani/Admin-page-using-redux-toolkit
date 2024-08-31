import { ClearUsers } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteUsers = () => {
    dispatch(ClearUsers());
  };

  return (
    <>
      <button onClick={deleteUsers}>Clear Users</button>
    </>
  );
};

export default DeleteAllUser;
