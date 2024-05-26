import api from "@libs/api/api";
import { CategoryUpdateDTO } from "../dtos/CategoryUpdateDTO";

interface UpdateProps {
  id: string;
  data: CategoryUpdateDTO;
}

export async function update({ id, data }: UpdateProps) {
  await api.put("/Category", data, {
    params: {
      categoryId: id,
    },
  });
}
