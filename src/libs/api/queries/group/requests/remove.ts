import api from "@libs/api/api";

export async function remove(groupId: string) {
  await api.delete("/Group", {
    params: {
      groupId,
    },
  });
}
