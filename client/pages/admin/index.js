import Layout from "../../components/layout.component";
import withAdmin from '../withAdmin'


const Admin = ({user, token}) => {
  return <Layout>{JSON.stringify(user, token)}</Layout>;
};

export default withAdmin(Admin);
