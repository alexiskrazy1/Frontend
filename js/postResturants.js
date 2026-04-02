const formEl = document.querySelector(".form");

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData);

  // Basic validation
  if (!data.restaurant_name) {
    $.toaster({
      priority: "danger",
      title: "Error",
      message: "Restaurant name is required",
    });
    return;
  }

  const res = await fetch(
    "https://restaurantsbackend.onrender.com/api/v1/restaurants",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    $.toaster({
      priority: "danger",
      title: "Error",
      message: "Failed to add restaurant",
    });
    return;
  }

  $.toaster({
    priority: "success",
    title: "Restaurants",
    message: "Restaurant added successfully",
  });

  formEl.reset();
});