const testimonials = [
  {
    name: "Emily Johnson",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: `I am incredibly impressed with the innovative technology and sleek
        design of Apple laptops and phones. The seamless integration between
        devices has truly enhanced my productivity and convenience. I highly
        recommend Apple to anyone seeking top-notch quality and performance.`,
  },
  {
    name: "Ava Jenkins",
    photoUrl:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: `Apple has revolutionized the tech industry with their sleek laptops and powerful phones. The innovative design and cutting-edge technology make their products a must-have for anyone looking to stay connected and productive. I highly recommend Apple for anyone in need of reliable and stylish electronic devices.`,
  },
  {
    name: "Jennifer Thompson",
    photoUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: `Apple's laptops and phones are top-notch in quality and performance. I am impressed with the sleek design and user-friendly interface. The products are worth every penny, offering reliability and innovation that exceed expectations.`,
  },
  {
    name: "Peter barg",
    photoUrl:
      "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: `I am blown away by the innovative technology and sleek designs of Apple's laptops and phones. The seamless integration of hardware and software enhances my productivity and makes everyday tasks a breeze. I highly recommend Apple products to anyone looking for top-of-the-line devices.`,
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const username = document.querySelector(".username");
let indx = 0;
updateTestimonail();
function updateTestimonail() {
  const { name, photoUrl, text } = testimonials[indx];
  imgEl.src = photoUrl;
  textEl.innerHTML = text;
  username.innerHTML = name;
  indx++;
  setTimeout(() => {
    updateTestimonail();
  }, 10000);
  if (indx === testimonials.length) {
    indx = 0;
  }
}
