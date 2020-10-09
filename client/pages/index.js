import Layout from "../components/layout.component";
import axios from "axios";
import { API } from "../config";
import Link from "next/Link";

const Home = ({categories}) => {

  const listCategories = () => categories.map((category, index) => (
    <Link href='/'>
      <a style={{border: '1px solid red'}} className='bg-light p-3 col-md-4'>
        <div>
          <div className='row'>
            <div className='col-md-4'>
              <img src={category.image && category.image.url} alt={category.name} style={{width: '100px', height: 'auto'}} className='pr-3' />
            </div>
            <div className='col-md-8'>
              <h3>{category.name}</h3>
            </div>
          </div>
        </div>
      </a>
    </Link>
  ))

  return <Layout>
    <div className='row'>
      <div className='col-md-12'>
        <h1 className='font-weight-bold'>Browse Tutorials/Courses</h1>
        <br />
        <div className='row'>
          {listCategories()}
        </div>
      </div>
    </div>
  </Layout>;
};

Home.getInitialProps = async () => {
  const response = await axios.get(`${API}/categories`);
  return {
    categories: response.data
  }
};

export default Home;
