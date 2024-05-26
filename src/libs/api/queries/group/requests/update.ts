import api from "@libs/api/api";
import { GroupUpdateDTO } from "../dtos/GroupUpdateDTO";

interface UpdateProps {
  id: string;
  data: GroupUpdateDTO;
}

export async function update({ id, data }: UpdateProps) {
  await api.put("/Group", data, {
    params: {
      groupId: id,
    },
  });
}
