import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Skeleton, Card, Avatar } from "antd";
import moment from "moment";

const { Meta } = Card;

const UserDetailCard = (props) => {
  const {
    name,
    email,
    city,
    country,
    address,
    postcode,
    picture,
    phone,
    dob,
  } = props.user;

  return (
    <div className="UserDetailCard">
      <Card>
        <Skeleton loading={false} avatar active>
          <Meta avatar={<Avatar src={picture} />} title={name} />
          <div className="email">
            <label>
              <b>Email: </b>
            </label>
            <span id="email">{email}</span>
          </div>
          <div>
            <label>
              <b>Phone: </b>
            </label>
            <span id="phone">{phone}</span>
          </div>
          <div>
            <label>
              <b>Address: </b>
            </label>
            <span id="address">{address}</span>
          </div>
          <div>
            <label>
              <b>City: </b>
            </label>
            <span id="city">{city}</span>
          </div>
          <div>
            <label>
              <b>Postcode: </b>
            </label>
            <span id="postcode">{postcode}</span>
          </div>
          <div>
            <label>
              <b>Country: </b>
            </label>
            <span id="country">{country}</span>
          </div>

          <div>
            <label>
              <b>Birthdate: </b>
            </label>
            <span id="dob">{moment(dob).format("MMMM Do YYYY")}</span>
          </div>
        </Skeleton>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withRouter(UserDetailCard));
