import axios from "axios";

export async function getStaticProps({ params }) {
  const response = await axios.get(`https://aolimock.free.beeceptor.com/product/${params.id}`);
  return {
    props: {
      product: response.data.product,
    },
  };
}

export async function getStaticPaths() {
  const response = await axios.get('https://aolimock.free.beeceptor.com/products');
  const productsData = response.data;
  const paths = productsData.data.map(p => ({
    params: { id: `${p.id}`},
  }))

  return { paths, fallback: true }
}


export default function Post({ product }) {
  return product ? (
    <div>
      <h1>{product.name}</h1>
      <div>
        {product.color}
      </div>
    </div>
  ) : <div>Loading...</div>;
}