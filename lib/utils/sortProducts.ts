type ProductsList = {
  id: string;
  name: string;
  price: string;
  productType: string;
  slug: string;
  images: {
    url: string;
    alt: string;
  }[];
  _createdAt: string;
}[];

const sortProducts = (
  sortType: string | string[],
  productsList: ProductsList
) => {
  if (sortType === "newest") {
    productsList.sort(
      (a, b) => Date.parse(b._createdAt) - Date.parse(a._createdAt)
    );
  }

  if (sortType === "price_ascending") {
    productsList.sort(function (a, b) {
      return parseInt(a.price) - parseInt(b.price);
    });
  }

  if (sortType === "price_descending") {
    productsList.sort(function (a, b) {
      return parseInt(b.price) - parseInt(a.price);
    });
  }

  if (sortType === "name_ascending") {
    productsList.sort(function (a, b) {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA === nameB) return 0;
      return nameA > nameB ? 1 : -1;
    });
  }

  if (sortType === "name_descending") {
    productsList.sort(function (a, b) {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA === nameB) return 0;
      return nameA > nameB ? -1 : 1;
    });
  }
};

export default sortProducts;
