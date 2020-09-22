import Layout from "../../components/layout.component";
import withUser from '../withUser'

const User = ({ user, token }) => {
  return <Layout>{JSON.stringify(user, token)}</Layout>;
};

export default withUser(User);
