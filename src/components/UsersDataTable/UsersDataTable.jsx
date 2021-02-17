import { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../redux/reducers/users/usersActions";
import { Table } from "antd";

const UsersDataTable = (props) => {
  const { getUsers } = props;
  useEffect(() => {
    getUsers();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
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

  const data = [
    {
      key: "1",
      name: "John Brown",
      email: "email@g.com",
      city: "New York",
      country: "United States",
    },
    {
      key: "2",
      name: "Bobo",
      email: "bobo@g.com",
      city: "Salt Lake",
      country: "United States",
    },
    {
      key: "3",
      name: "Jim Town",
      email: "jim@gmail.com",
      city: "New York",
      country: "United States",
    },
  ];

  return (
    <div className="UserDataTable">
      UserDataTable
      <Table columns={columns} dataSource={data} />
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
