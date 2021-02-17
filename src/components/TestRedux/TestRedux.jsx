import { connect } from "react-redux";

const TestRedux = (props) => {
  return (
    <div>
      TestRedux
      <button onClick={() => console.log({ props })}> log</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(TestRedux);
