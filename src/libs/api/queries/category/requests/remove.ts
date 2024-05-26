import api from "@libs/api/api";

export async function remove(categoryId: string) {
  await api.delete("/Category", {
    params: {
      categoryId,
    },
  });
}
