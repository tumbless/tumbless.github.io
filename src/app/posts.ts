interface Blog {
	name: string;
	uuid: string;
}

interface Poster {
	url: string;
}

interface SlimMedia {
	type: string;
	media_url_template: string;
}

interface Content {
	type: string;
	subtype: string;
	album: string;
	artist: string;
	poster: Poster[];
	slim_media: SlimMedia;
	text: string;
	title: string;
}

interface Trail {
	content: Content[];
}

export interface Post {
	id: number;
	content: Content[];
	reblog_key: string;
	trail: Trail[];
	selected: boolean;
}

interface Response {
	blog: Blog;
	posts: Post[];
}

export interface Posts {
	response: Response;
}
