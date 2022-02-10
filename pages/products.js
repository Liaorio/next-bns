import axios from "axios";

export async function getStaticProps() {
  const response = await axios.get('https://aolimock.free.beeceptor.com/products');
  const productsData = response.data;
  return {
    props: {
      productsData
    }
  }
}

const Product = ({ productsData }) => {
  return (
    productsData && productsData.data ? productsData.data.map((p, i) => <div key={i}>{p.name}</div>) : <p>Loading...</p>
  )
};

export default Product;