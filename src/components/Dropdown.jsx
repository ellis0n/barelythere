import React, { useEffect } from "react";

const Dropdown = ({ endpoint }) => {
	useEffect(() => {
		fetch(endpoint)
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, [endpoint]);

	return <div className="dropdown">Dropdown</div>;
};

export default Dropdown;
