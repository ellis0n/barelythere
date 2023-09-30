import React, { useState } from "react";

const Navbar = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	console.log(isOpen);

	const { current } = props;

	const links = [
		{
			text: "home",
			href: "/",
		},
		{
			text: "releases",
			href: "/releases",
		},
		{
			text: "shows",
			href: "/shows",
		},
		{
			text: "blogs",
			href: "/blogs",
		},
		{
			text: "zines",
			href: "/zines",
		},
	];

	const checkUrl = (url, href) => {
		if (url === href) {
			return "active";
		}
		return "";
	};

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div class="navbar text-black rounded-md fixed right-2 top-22 sm:static sm:flex sm:flex-row sm:justify-center sm:text-xl md:text-xl lg:text-2xl">
			<div
				class="mt-4 w-8 flex mx-auto justify-right sm:hidden"
				onClick={toggleMenu}
			>
				<button class="mx-auto h-auto w-full sm:hidden cursor-pointer">
					<svg
						class="w-100 h-100"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
					</svg>
				</button>
			</div>

			{isOpen && (
				<nav class="hidden navbar-inner sm:pb-4 sm:bg-white sm:block">
					<ul class="grid justify-items-end sm:flex sm:flex-row sm:justify-center ml-4 ">
						{links.map((link, index) => (
							<li
								key={index}
								class={`nav-item ${
									index > 0 ? "mt-4 " : " ml-6 sm:ml-0 sm:mt-4"
								} sm:px-4 ${checkUrl(link.href, current)}`}
							>
								<a href={link.href}>
									<div>{link.text}</div>
								</a>
							</li>
						))}
					</ul>
				</nav>
			)}
		</div>
	);

	{
		/* <style>
    .navbar {
        z-index: 1;
        font-family: dotgothic16;

    }

    .navbar-inner{
    }

    .nav-item:hover, .active {
        box-shadow: inset px 0px 0px 2rem rgba(255, 255, 255, 0.219);
        transition: box-shadow 0.1s;
        background: black;
        color: #fff;
    }
</style> */
	}
};

export default Navbar;
