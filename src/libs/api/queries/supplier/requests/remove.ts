import api from "@libs/api/api";

export async function remove(supplierId: string) {
  await api.delete("/Supplier", {
    params: {
      supplierId,
    },
  });
}
