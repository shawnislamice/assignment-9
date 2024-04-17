import toast from "react-hot-toast";
export const getItems = () => {
  let items = [];
  let storedItems = localStorage.getItem("estates");
  if (storedItems) {
    items = JSON.parse(storedItems);
  }
  return items;
};

export const setItem = (item) => {
  let items = getItems();

  const isExist = items.find((itemCard) => itemCard.id == item.id);
  if (isExist) {
    toast.error("Already Exist in Cart");
  } else {
    items.push(item);
    localStorage.setItem("estates", JSON.stringify(items));
    toast.success("Successfully added to your cart");
  }
};

export const deleteItem = (id) => {
  let items = getItems();
  const remaining = items.filter((item) => item.id !== id);
  localStorage.setItem("estates", JSON.stringify(remaining));
  toast.success("Successfully removed from your cart");
};
export const deleteItemFavourites = (id) => {
  let items = JSON.parse(localStorage.getItem('favourites'));
  const remaining = items.filter((item) => item.id !== id);
  localStorage.setItem("favourites", JSON.stringify(remaining));
  toast.success("Successfully removed from your favourites");
};
