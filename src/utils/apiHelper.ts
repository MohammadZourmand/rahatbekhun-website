const apiHelper = async (endpoint: string, options: RequestInit = {}) => {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ??
    process.env.API_URL ??
    "http://localhost:5000";

  const url = endpoint.startsWith("http") ? endpoint : `${apiUrl}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status} ${response.statusText}`,
    );
  }

  return response;
};

export default apiHelper;
