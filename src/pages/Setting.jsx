import { Box } from "@mui/material"
import SideNav from "../components/sideNav/SideNav"
import Lists from "../components/settings/Lists"

const Setting = () => {
  return (
    <>
      <div style={{ background: "linear-gradient(150deg,#ecf1f1 0%,rgb(233,237,254) 100%)",       minHeight: "110vh" }}>
        <Box height={70} />
        <Box sx={{ display: 'flex' }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Lists />
          </Box>
        </Box>
      </div>

    </>
  )
}

export default Setting