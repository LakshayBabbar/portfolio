export const fetchData = async (path: String) => {
  try {
    const req = await fetch("/api/" + path);
    const res = await req.json();
    return res;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

export const updateHandler = async (path: string, body: {}) => {
  try {
    const req = await fetch(`/api/${path}/`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.error("Failed to update item:", error);
  }
};

export const deleteHandler = async (path: string, id: string) => {
  try {
    const req = await fetch(`/api/${path}/`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const res = await req.json();
    return res;
  } catch (error) {
    console.error("Failed to delete item:", error);
  }
};
