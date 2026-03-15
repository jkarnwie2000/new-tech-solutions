// "use client";
// import { useEffect, useRef, useState } from "react";

// const ScrollToTop = () => {
// 	const pathRef = useRef<SVGPathElement>(null);
// 	const [isVisible, setIsVisible] = useState(false);

// 	useEffect(() => {
// 		const path = pathRef.current;
// 		if (!path) return;

// 		const pathLength = path.getTotalLength();
// 		path.style.strokeDasharray = `${pathLength} ${pathLength}`;
// 		path.style.strokeDashoffset = pathLength.toString();
// 		path.getBoundingClientRect(); // force layout
// 		path.style.transition = "stroke-dashoffset 10ms linear";

// 		const updatePath = () => {
// 			const scroll = window.scrollY;
// 			const height = document.documentElement.scrollHeight - window.innerHeight;
// 			const dashoffset = pathLength - (scroll * pathLength) / height;
// 			path.style.strokeDashoffset = dashoffset.toString();

// 			setIsVisible(scroll > 50);
// 		};

// 		window.addEventListener("scroll", updatePath);
// 		updatePath();

// 		return () => {
// 			window.removeEventListener("scroll", updatePath);
// 		};
// 	}, []);

// 	const scrollToTop = () => {
// 		window.scrollTo({ top: 0, behavior: "smooth" });
// 	};

// 	return (
// 		<>
// 			<div
// 				className={`scroll-to-top ${isVisible ? "scroll-top-active" : ""}`}
// 				onClick={scrollToTop}
// 				style={{ cursor: "pointer" }}
// 			>
// 				<svg className="scroll-top-inner" viewBox="-1 -1 102 102">
// 					<path
// 						ref={pathRef}
// 						d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
// 						fill="none"
// 						stroke="currentColor"
// 						strokeWidth="2"
// 					/>
// 				</svg>
// 			</div>

// 			<div className="paginacontainer">
// 				<div className="progress-wrap">
// 					<svg
// 						className="progress-circle svg-content"
// 						width="100%"
// 						height="100%"
// 						viewBox="-1 -1 102 102"
// 					>
// 						<path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
// 					</svg>
// 					<div className="top-arrow">
// 						<img src="assets/images/v1/arrow.svg" alt="" />
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default ScrollToTop;

"use client";
import { useEffect, useRef, useState } from "react";

const ScrollToTop = () => {
	const pathRef = useRef<SVGPathElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const path = pathRef.current;
		if (!path) return;

		const pathLength = path.getTotalLength();
		path.style.strokeDasharray = `${pathLength} ${pathLength}`;
		path.style.strokeDashoffset = pathLength.toString();
		path.getBoundingClientRect(); // force layout
		path.style.transition = "stroke-dashoffset 10ms linear";

		const updatePath = () => {
			const scroll = window.scrollY;
			const height = document.documentElement.scrollHeight - window.innerHeight;
			const dashoffset = pathLength - (scroll * pathLength) / height;
			path.style.strokeDashoffset = dashoffset.toString();

			setIsVisible(scroll > 50);
		};

		window.addEventListener("scroll", updatePath);
		updatePath();

		return () => {
			window.removeEventListener("scroll", updatePath);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div
			className="paginacontainer"
			onClick={scrollToTop}		 
		>
			<div className={`progress-wrap ${isVisible ? "active-progress" : ""}`}>
				<svg
					className="progress-circle svg-content"
					width="100%"
					height="100%"
					viewBox="-1 -1 102 102"
				>
					<path
						ref={pathRef}
						d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
						stroke="#000"
						strokeWidth="2"
						fill="none"
					/>
				</svg>
				<div className="top-arrow">
					<img src="assets/images/v1/arrow.svg" alt="Scroll to top arrow" />
				</div>
			</div>
		</div>
	);
};

export default ScrollToTop;
