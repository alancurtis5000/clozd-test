const ABasic = (props) => {
  const { testProp } = props;

  return (
    <div className="ABasic">
      ABasic
      <div data-testid="test-prop-id">{testProp}</div>
    </div>
  );
};

export default ABasic;
