import apiHelper from "@/utils/apiHelper";

export const getSearchResult = async (url: string) => {
  try {
    const res = await apiHelper(url);
    return await res.json();
  } catch (err) {
    console.log(err);
    return { data: [], totalPages: 0 };
  }
};
