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
	blog_name: string;
	content: Content[];
	from: string;
	note_count: number;
	post_id: string;
	reblog_key: string;
	tags: string[];
	trail: Trail[];
	selected: boolean;
}

export interface Link {
	href: string;
}

interface Links {
	next: Link;
}

interface Response {
	blog: Blog;
	posts: Post[];
	_links: Links;
}

export interface Posts {
	response: Response;
}
