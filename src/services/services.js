import { useParams } from "react-router-dom";
const withRouter = (COMPONENT) => (props) => {
  const params = useParams();
  console.log(params);

  return <COMPONENT {...props} params={params} />;
};
const exports = { withRouter };
export default exports;
