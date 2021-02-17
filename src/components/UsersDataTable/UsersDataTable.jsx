import { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../redux/reducers/users/usersActions";

const UsersDataTable = (props) => {
  const { getUsers } = props;
  useEffect(() => {
    getUsers();
  }, []);

  return <div className="UserDataTable">UserDataTable</div>;
};

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
});
const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersDataTable);
