import Layout from "../../components/layout.component";
import withAdmin from "../withAdmin";
import Link from "next/Link";

const Admin = ({ user, token }) => {
  return (
    <Layout>
      <h1>Admin Dashboard</h1>
      <br />
      <div className="row">
        <div className="col-md-4">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link href="/admin/category/create">
                <a className="nav-link">Create category</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-8"></div>
      </div>
    </Layout>
  );
};

export default withAdmin(Admin);
