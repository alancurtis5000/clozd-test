import { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../redux/reducers/users/usersActions";
import { Card } from "antd";
import isEmpty from "lodash/isEmpty";
import { withRouter } from "react-router-dom";

const UserDetailCard = (props) => {
  useEffect(() => {}, []);

  return (
    <div className="UserDetailCard">
      user detail Card
      <Card>
        <h1>hello</h1>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(withRouter(UserDetailCard));
