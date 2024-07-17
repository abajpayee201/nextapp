import Home from "@/components/Home";
import Link from "next/link";
import Script from "next/script";



export default function HomePage() {
  return (

    <>



      <Home />


      <Script src="https://kit.fontawesome.com/af2cf86225.js" crossorigin="anonymous" />


      <Script src="assets/js/Footer-new.js" strategy="beforeInteractive" />

      <Script src="assets/js/formValidation.js" strategy="beforeInteractive" />
      <Script src="assets/js/jquery.easy-ticker.js" strategy="beforeInteractive" />
      <Script src="assets/js/bootstrap.bundle.min.js" />
      <Script src="assets/js/slick.min.js" strategy="beforeInteractive" />
      <Script src="assets/js/custom.js" strategy="beforeInteractive" />

    </>
  );
}
