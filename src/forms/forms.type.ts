type InputFormData = {
	id: string;
	name: string;
	email: string;
	address: {
		address_line_1: string;
		address_line_2: string;
		address_line_3: string;
		postcode: string;
		country: string;
	};
};

const _exampleInputForm: InputFormData = {
	id: "c8267b77-d796-451e-9948-e82f56412b56",
	name: "John Doe",
	email: "john.doe@example.com",
	address: {
		address_line_1: "Stratford Village Surgery",
		address_line_2: "50C Romford Road",
		address_line_3: "London",
		postcode: "E15 4BZ",
		country: "United Kingdom",
	},
};
