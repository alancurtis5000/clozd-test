import { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../redux/reducers/users/usersActions";
import { setUser } from "../../redux/reducers/user/userActions";
import { Table } from "antd";
import isEmpty from "lodash/isEmpty";
import { withRouter } from "react-router-dom";

const UsersDataTable = (props) => {
  const { getUsers, setUser, users, history } = props;
  const { isLoaded } = users;

  useEffect(() => {
    if (isEmpty(users.data)) {
      getUsers();
    }
  }, [getUsers, users.data]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
  ];

  const handleOnRowClick = (record, rowIndex) => {
    setUser(record);
    history.push(`/user/${record.key}`);
  };

  return (
    <div className="UsersDataTable">
      <div className="table-header">
        <h2>Users</h2>
        {users.error ? <p>{users.error}</p> : null}
      </div>
      <Table
        columns={columns}
        dataSource={users.data}
        loading={!isLoaded}
        pagination={{ pageSize: 5000 }}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => handleOnRowClick(record, rowIndex),
          };
        }}
      ></Table>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
  setUser: (user) => dispatch(setUser(user)),
});
const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UsersDataTable));
