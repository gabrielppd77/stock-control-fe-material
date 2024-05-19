import { Box } from "@mui/material";
import PageHeader from "../../components/PageHeader";

export default function Home() {
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <PageHeader title="Bem vindo!" />
    </Box>
  );
}
