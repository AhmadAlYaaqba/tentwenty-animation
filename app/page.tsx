import { ImageSlider } from "../components/image-slider";

const sliderData = [
  {
    imageSrc: "/image1.jpg",
    title: "Welcome To TenTwenty Farms",
    subTitle: "From our Farms\nto your hands",
  },
  {
    imageSrc: "/image2.jpg",
    title: "Welcome To TenTwenty Farms 2",
    subTitle: "From our Farms\nto your hands 2",
  },
  {
    imageSrc: "/image3.jpg",
    title: "Welcome To TenTwenty Farms",
    subTitle: "From our Farms\nto your hands",
  },
];

export default function Page() {
  return (
    <main>
      <ImageSlider sliders={sliderData} duration={80000} />
      <h1>Hello, Next.js!</h1>
    </main>
  );
}
