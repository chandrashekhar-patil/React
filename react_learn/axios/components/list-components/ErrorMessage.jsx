const ErrorMessage = ({items}) => {
  return <>{items.length === 0 && <h3>I have no car.</h3>}</>; //this is the condition rendering 
};
export default ErrorMessage;
