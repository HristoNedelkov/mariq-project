const apiKey = "AIzaSyBHbKFupEXKtN_xScx06aCC0KvQmhyx0t0";
const dataBaseUrl = "https://mariq-project-default-rtdb.firebaseio.com/";

 
const commentServices = {
  async add(commentData) {
    let res = await fetch(`${dataBaseUrl}/comments.json`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    let data = await res.json();
    return data;
  },
  async getAll() {
    let res = await fetch(`${dataBaseUrl}/comments.json`);
    let data = await res.json();
    if (!data) {
      return {};
    }
    return Object.keys(data).map((key) => ({ key, ...data[key] }));
  }
}; 