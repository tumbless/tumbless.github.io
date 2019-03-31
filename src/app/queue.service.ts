import {Injectable} from '@angular/core';
import {Post} from './posts';

@Injectable({
	providedIn: 'root'
})
export class QueueService {

	// posts: List<Post> = List();

	constructor() {
	}

	queue() {
		// console.log(this.posts.toArray());
	}

	add(post: Post) {
		// console.log(post);
		// this.posts = this.posts.push(post);
		// console.log(this.posts.toArray());
	}

	remove(post: Post) {
		// console.log(post);
		// this.posts = this.posts.splice(this.posts.indexOf(post), 1);
		// console.log(this.posts.toArray());
	}
}
