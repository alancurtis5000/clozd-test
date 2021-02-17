import { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../redux/reducers/users/usersActions";
import { Table } from "antd";
import isEmpty from "lodash/isEmpty";

const UsersDataTable = (props) => {
  const { getUsers, users } = props;
  const { isLoaded } = users;
  useEffect(() => {
    if (isEmpty(users.data)) {
      getUsers();
    }
  }, []);

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
    console.log("handleOnRowClick", { record, rowIndex });
  };

  return (
    <div className="UserDataTable">
      UserDataTable
      <Table
        columns={columns}
        dataSource={users.data}
        loading={!isLoaded}
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
});
const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersDataTable);
