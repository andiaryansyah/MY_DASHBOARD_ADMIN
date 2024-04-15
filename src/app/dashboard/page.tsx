import { Box } from "@mui/material";
import Rightbar from "./rightbar/rightbar";
import Transactions from "./transactions/transactions";
import Charts from "./charts/charts";
import CardContent from "./cardContent/cardContent";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", gap: "20px", mt: "20px" }}>
      <Box
        sx={{ flex: 3, display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <Box sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <CardContent />
          <CardContent />
          <CardContent />
        </Box>
        <Transactions />
        <Charts />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Rightbar />
      </Box>
    </Box>
  );
};

export default Dashboard;
