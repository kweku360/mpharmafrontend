export const mockData = () => {
    const p = fetch(`http://www.mocky.io/v2/5c3e15e63500006e003e9795`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (response) => {
        const data = await response.json();
        // check for error response
        if (response.ok) {
          console.log(data);
          return Promise.resolve(data.payload);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  
    return p;
  };