export interface Blog {
	blogId: string;
	tumblr: {
		name: string;
	}
}

export interface User {
	blogs: Blog[];
}
