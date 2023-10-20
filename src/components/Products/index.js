import AllProductsSection from '../AllProductsSection'
import PrimeDealsSection from '../PrimeDealsSection'

import Header from '../Header'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="product-sections">                //   display the product 
      <PrimeDealsSection />
      <AllProductsSection />
    </div>
  </>
)

export default Products
