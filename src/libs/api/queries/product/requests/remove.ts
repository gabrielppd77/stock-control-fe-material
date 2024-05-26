import api from "@libs/api/api";

export async function remove(productId: string) {
  await api.delete("/Product", {
    params: {
      productId,
    },
  });
}
