import { useEffect } from "react";
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
  useEffect(() => {}, []);

  return (
    <div className="UserDetailCard">
      <Card
        style={{
          width: 400,
          marginTop: 16,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Skeleton loading={false} avatar active>
          <Meta avatar={<Avatar src={picture} />} title={name} />
          <div style={{ marginTop: 16 }}>
            <label htmlFor="email">Email: </label>
            <span id="email">{email}</span>
          </div>
          <div>
            <label htmlFor="phone">Phone: </label>
            <span id="phone">{phone}</span>
          </div>
          <div>
            <label htmlFor="address">Address: </label>
            <span id="address">{address}</span>
          </div>

          <div>
            <label htmlFor="city">City: </label>
            <span id="city">{city}</span>
          </div>
          <div>
            <label htmlFor="postcode">Postcode: </label>
            <span id="postcode">{postcode}</span>
          </div>
          <div>
            <label htmlFor="country">Country: </label>
            <span id="country">{country}</span>
          </div>

          <div>
            <label htmlFor="dob">Birthdate: </label>
            <span id="dob">{moment(dob).htmlFormat("MMMM Do YYYY")}</span>
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
