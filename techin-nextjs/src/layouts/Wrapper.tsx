"use client";
import { animationCreate } from "@/utils/utils";
import { useEffect } from "react";

import AOS from 'aos'
import 'aos/dist/aos.css'
import ScrollToTop from "@/common/scroll-to-top";



const Wrapper = ({ children }: any) => {
	useEffect(() => {
		// animation
		const timer = setTimeout(() => {
			animationCreate();
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	 useEffect(() => {
    AOS.init({
      duration: 1000, // optional settings
      once: true,
    })
  }, [])



	return (
		<>
			{children}
			<ScrollToTop />
		</>
	);
};

export default Wrapper;
