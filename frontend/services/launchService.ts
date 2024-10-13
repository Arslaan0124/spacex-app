import type { PaginatedResponse } from "~/types/api";
import type { Launch } from "~/types/launch";

export const fetchLaunches = async (): Promise<Launch[]> => {
  const config = useRuntimeConfig();
  const body = {
    query: {},
    options: {
      sort: { date_utc: "desc" },
      limit: 30,
    },
  };

  try {
    const data = await $fetch<PaginatedResponse<Launch>>(
      `${config.public.spacexApiUrl}/launches/query`,
      {
        method: "POST",
        body: body,
      }
    );
    return data?.docs ?? [];
  } catch (error) {
    throw new Error(`Error fetching launches: ${error}`);
  }
};

export const fetchSavedLaunches = async (): Promise<Launch[]> => {
  const config = useRuntimeConfig();
  return await $fetch<Launch[]>(`${config.public.apiUrl}/launches`);
};

export const saveLaunch = async (launch: Launch): Promise<Launch> => {
  const config = useRuntimeConfig();
  return await $fetch<Launch>(`${config.public.apiUrl}/launches`, {
    method: "POST",
    body: launch,
  });
};

export const deleteLaunch = async (id: string): Promise<void> => {
  const config = useRuntimeConfig();
  await $fetch(`${config.public.apiUrl}/launches/${id}`, {
    method: "DELETE",
  });
};
