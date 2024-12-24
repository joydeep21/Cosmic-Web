import accessories from "/public/accessory2.png";
import electronics from "/public/electronics2.png";
import mobile from "/public/mobile2.png";
import fashion from "/public/fashion2.png";
import Grocery from "/public/grocery2.png";
import jwellery from "/public/jwellery2.png";
import Kitchen from "/public/kitchen2.png";
import medicine from "/public/medicine2.png";
import kids from "/public/kids2.png";
import furniture from "/public/furniture2.png";
import offer from "/public/specialoffer.png";
const category = [
  {
    id: 1,
    name: "Special Offer",
    mainImage: offer,
    subcategories: [
      { name: "Mobiles" },
      { name: "Laptops" },
      { name: "TVs" },
      // Add more subcategories as needed
    ],
  },
  {
    id: 2,
    name: "Electronics",
    mainImage: electronics,
  },
  {
    id: 3,
    name: "Mobile",
    mainImage: mobile,
  },
  {
    id: 4,
    name: "Accessories",
    mainImage: accessories,
  },

  {
    id: 5,
    name: "Kids",
    mainImage: kids,
  },
  {
    id: 6,
    name: "Fashion",
    mainImage: fashion,
  },
  {
    id: 7,
    name: "Jwellery",
    mainImage: jwellery,
  },
  {
    id: 8,
    name: "Grocery",
    mainImage: Grocery,
  },
  {
    id: 9,
    name: "Kitchen",
    mainImage: Kitchen,
  },
  {
    id: 10,
    name: "Furniture",
    mainImage: furniture,
  },
  {
    id: 11,
    name: "Medicine",
    mainImage: medicine,
  },
];
export default category;
