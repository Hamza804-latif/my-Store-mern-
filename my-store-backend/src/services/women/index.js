let img1 = "https://picsum.photos/200";
let img2 = "https://picsum.photos/200";
let img3 = "https://picsum.photos/200";
let img4 = "https://picsum.photos/200";
let img5 = "https://picsum.photos/200";
let img6 = "https://picsum.photos/200";
const kapray = [
  {
    id: 1,
    name: "REGULAR FIT TRUCKER WITH CONTRAST DETAIL",
    description: "F0093/101/801-10401382",
    imageSrc: img1,
    imageAlt: "",
    price: 3000,
    color: "blue",
    size: "large",
    options: "L Blue",
    gender: "Female",
    href: "#",
  },
  {
    id: 2,
    name: "REGULAR FIT SHERPA COLLAR TRUCKER JACKET",
    description: "F0085/101/625-10400746",
    imageSrc: img2,
    imageAlt: "",
    color: "blue",
    size: "large",
    price: 3000,
    options: "XL Blue",
    gender: "Female",
    href: "#",
  },
  {
    id: 3,
    name: "REGULAR FIT SHERPA COLLAR TRUCKER JACKET",
    description: "F0096/101/901-10401403",
    imageSrc: img3,
    imageAlt: "",
    color: "blue",
    size: "large",
    price: 3000,
    options: "S Black",
    gender: "Female",
    href: "#",
  },
  {
    id: 4,
    name: "OVERSIZED UNISEX DENIM VARSITY JACKET",
    description: "F0083/101/625-10400714",
    imageSrc: img4,
    imageAlt: "",
    color: "blue",
    size: "large",
    price: 3000,
    options: "S Black",
    gender: "Female",
    href: "#",
  },
  {
    id: 5,
    name: "REGULAR FIT GRAPHIC HOODED JACKET",
    description: "F0079/101/901-10385656",
    imageSrc: img5,
    imageAlt: "",
    color: "blue",
    size: "large",
    price: 9000,
    options: "S Black",
    gender: "Female",
    href: "#",
  },
  {
    id: 6,
    name: "MOCK NECK PUFFER JACKET",
    description: "F0075/101/710-10385624",
    imageSrc: img6,
    imageAlt: "",
    color: "blue",
    size: "large",
    price: 2000,
    options: "S Black",
    gender: "Female",
    href: "#",
  },
];

module.exports = (req, resp) => {
  resp.json(kapray);
};
