import api from "@libs/api/api";

interface RequestParams {
  productId: string;
  quantity: number;
}

export async function multiplyProduct(params: RequestParams) {
  await api.post("/Product/MultiplyProduct", null, {
    params,
  });
}
