import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material"
import SideNav from "../components/sideNav/SideNav"
import { ShoppingBag } from "@mui/icons-material"
import ProductList from "../components/products/ProductList"



const Products = () => {
  return (
    <>
      <div style={{ background: "linear-gradient(150deg,#ecf1f1 0%,rgb(233,237,254) 100%)", minHeight: "110vh" }}>
        <Box height={70} />
        <Box sx={{ display: 'flex' }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <ProductList />
          </Box>
        </Box>
      </div>
    </>
  )
}

export default Products