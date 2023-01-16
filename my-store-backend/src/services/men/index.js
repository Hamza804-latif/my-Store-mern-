const Categories = [
  {
    id: 2,
    title: "UNSTITCHED",
    color: "red",
    size: "medium",
    price: "$70",
    image:
      "https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/01_unstitched.jpg",
  },
  {
    id: 3,
    title: "WESTERN",
    color: "white",
    size: "small",
    price: "$100",
    image:
      "https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/02_western.jpg",
  },
  {
    id: 4,
    title: "EASTERN",
    color: "blue",
    size: "large",
    price: "$210",
    image:
      "https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/03_eastern.jpg",
  },
  {
    id: 5,
    title: "SHOES",
    color: "sky-blue",
    size: "medium",
    price: "$300",
    image:
      "https://www.gulahmedshop.com/media/wysiwyg/cms-page/01_men_clothes/22_12_01/04_shoes.jpg",
  },
];

module.exports = (req, resp) => {
  resp.json(Categories);
};
