import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/compnents/Hero/Hero";
import Swiper from "@/compnents/Scard/Scard";
import Product from "@/compnents/Product/Product";
import Swip from "@/compnents/Swip/Swip";
import Feature from "@/compnents/Feature/Feature";
import Pro from "@/compnents/Pro/Pro";

export default function Home() {
  return (
    <div>
      <Hero />
      <Swiper />
      <Product />
      <Swip />
      <Feature />
      <Pro />
    </div>
  );
}
