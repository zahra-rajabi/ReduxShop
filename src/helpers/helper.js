function shortenText(title) {
  const shortenTitle = title.split(" ").splice(0, 3).join(" ");
  if (shortenTitle.length > 20) return title.split(" ").splice(0, 2).join(" ");
  return shortenTitle;
}

function searchProducts(products, search) {
  if (!search) return products;
  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  return searchedProducts;
}
function categoryProducts(products, category) {
  if (!category || category === "all") return products;
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts;
}

function getInitialParams(searchParams) {
  const query = {};
  const search = searchParams.get("search");
  const category = searchParams.get("category");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
}

function sumProducts(selectedItems) {
  const total = selectedItems
    .reduce(
      (total, selectedItem) =>
        total + selectedItem.price * selectedItem.quantity,
      0
    )
    .toFixed(2);
  const counter = selectedItems.reduce(
    (counter, selectedItem) => counter + selectedItem.quantity,
    0
  );

  return { total, counter };
}

function itemQuantity(state, id) {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) return 0;
  return state.selectedItems[index].quantity;
}

export {
  shortenText,
  searchProducts,
  categoryProducts,
  getInitialParams,
  sumProducts,
  itemQuantity,
};
