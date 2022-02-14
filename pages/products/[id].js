import axios from "axios";

export async function getStaticProps({ params }) {
  const response = await axios.get(`https://6209943b6df46f0017f4c551.mockapi.io/api/v1/products/${params.id}`);
  return {
    props: {
      product: response.data,
    },
  };
}

export async function getStaticPaths() {
  const response = await axios.get('https://6209943b6df46f0017f4c551.mockapi.io/api/v1/products');
  const paths = response.data.map(p => ({
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