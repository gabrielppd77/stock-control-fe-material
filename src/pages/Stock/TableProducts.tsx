import DataTable from "@components/DataTable";
import {
  ProductStatusEnum,
  ProductStatusEnumColor,
  ProductStatusEnumLabel,
} from "@libs/api/enums/ProductStatusEnum";
import { Circle } from "@mui/icons-material";
import { Box, Tooltip } from "@mui/material";

import { ProductDTO } from "@libs/api/queries/product/dtos/ProductDTO";

interface TableProductsProps {
  data: ProductDTO[];
}

export default function TableProducts({ data }: TableProductsProps) {
  return (
    <DataTable
      columns={[
        {
          name: "code",
          label: "Código",
          options: {
            setCellProps: () => ({
              sx: {
                width: 120,
              },
            }),
          },
        },
        {
          name: "name",
          label: "Nome",
        },
        {
          name: "status",
          label: "Status",
          options: {
            setCellProps: () => ({
              sx: {
                width: 120,
              },
            }),
            customBodyRender: (value: ProductStatusEnum) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: ProductStatusEnumColor[value],
                }}
              >
                <Tooltip title={ProductStatusEnumLabel[value]}>
                  <Circle fontSize="small" />
                </Tooltip>
              </Box>
            ),
          },
        },
      ]}
      pagination={false}
      data={data}
    />
  );
}
