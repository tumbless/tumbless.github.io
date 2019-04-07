import {Post} from './posts';

export interface Queue {
	comment: string;
	posts: Post[];
	tags: string[];
	to: string;
}
