export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

export const HOME_ICON_URL = "https://img.icons8.com/?size=100&id=86527&format=png&color=000000" ;

export const LOGO_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BcogqOSDvFkYR7jE_mz_NQ94rxCsySE4aw&s";

export const BASE_URL = "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

export const MENU_API =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=";

export const restroList = [
  {
    "data": {
      "id": "134",
      "imageId": "/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav%20Bhaji.png",
      "name": "KFC",
      "cuisines": ["Snacks", "Pav Bhaji"],
      "costForTwo": 40000,
      "deliveryTime": 36,
      "avgRating": "3.8"
    }
  },
  {
    "data": {
      "id": "135",
      "imageId": "/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav%20Bhaji.png",
      "name": "Dominos",
      "cuisines": ["Burgers", "Pizza"],
      "costForTwo": 30000,
      "deliveryTime": 40,
      "avgRating": "3.5"
    }
  },
  {
    "data": {
      "id": "136",
      "imageId": "/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav%20Bhaji.png",
      "name": "Meghana Biryani",
      "cuisines": ["Biryani", "Pizza"],
      "costForTwo": 30000,
      "deliveryTime": 40,
      "avgRating": "4.1"
    }
  },
  {
    "data": {
      "id": "137",
      "imageId": "/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav%20Bhaji.png",
      "name": "Nagarjuna",
      "cuisines": ["Andhra", "Meals"],
      "costForTwo": 30000,
      "deliveryTime": 40,
      "avgRating": "4.2"
    }
  },
  {
    "data": {
      "id": "138",
      "imageId": "/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav%20Bhaji.png",
      "name": "ArabianNight",
      "cuisines": ["Mandi", "Biryani"],
      "costForTwo": 30000,
      "deliveryTime": 40,
      "avgRating": "3.9"
    }
  },
  {
    "data": {
      "id": "139",
      "imageId": "/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav%20Bhaji.png",
      "name": "Nandini Cafe",
      "cuisines": ["Tea", "Coffee"],
      "costForTwo": 30000,
      "deliveryTime": 40,
      "avgRating": "4.0"
    }
  },
  {
    "data": {
      "id": "140",
      "imageId": "/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav%20Bhaji.png",
      "name": "Udipi Grand",
      "cuisines": ["Idly", "Vada"],
      "costForTwo": 30000,
      "deliveryTime": 40,
      "avgRating": "4.3"
    }
  }
];

export const normalizeRestaurantData = (restaurants) => {
  if (!Array.isArray(restaurants)) {
    return [];
  }

  return restaurants.map((restaurant) => {
    const data = restaurant?.data ?? restaurant?.info ?? restaurant;

    return {
      ...restaurant,
      info: {
        id: data?.id ?? restaurant?.info?.id,
        cloudinaryImageId: data?.cloudinaryImageId ?? data?.imageId,
        name: data?.name,
        avgRating: data?.avgRating,
        cuisines: data?.cuisines ?? [],
        costForTwo: data?.costForTwo,
        sla: data?.sla ?? { slaString: `${data?.deliveryTime ?? 0} mins` },
      },
    };
  });
};

