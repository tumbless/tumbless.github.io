import {Injectable} from '@angular/core';
import {Link, Post} from '../_type/posts';
import {BehaviorSubject} from 'rxjs';
import {User} from '../_type/user';
import {Queue} from '../_type/queue';
import {Consumer} from '../consumer';

@Injectable({
	providedIn: 'root'
})
export class QueueService {

	private readonly posts$$ = new BehaviorSubject<Post[]>([]);
	readonly posts$ = this.posts$$.asObservable();

	private readonly consumer$$ = new BehaviorSubject<Consumer>(null);
	readonly consumer$ = this.consumer$$.asObservable();

	next: Link;

	constructor() {
	}

	get posts(): Post[] {
		return this.posts$$.getValue();
	}

	set posts(p: Post[]) {
		this.posts$$.next(p);
	}

	clearPosts() {
		this.posts = [];
	}

	addPost(post: Post) {
		this.posts = [
			...this.posts,
			post
		];
	}

	removePost(post: Post) {
		this.posts = this.posts.filter(p => p.id !== post.id);
	}

	selectPost(id: number) {
		const post = this.posts.find(p => p.id === id);
		if (post) {
			const index = this.posts.indexOf(post);
			const selected = !post.selected;
			this.posts[index] = {
				...post,
				selected
			};
			this.posts = [...this.posts];
		}
	}

	selectPostByNoteCount(count: number) {
		this.posts = this.posts.map(post => {
			if (post.note_count >= count) {
				post.selected = true;
			}
			return post;
		});
	}

	selectedPostsCount(): number {
		return this.posts.reduce((n, p) => {
			if (p.selected) {
				return n + 1;
			}
			return n;
		}, 0);
	}

	selectedPosts(): Post[] {
		return this.posts.filter(post => post.selected === true);
	}

	get consumer(): Consumer {
		return this.consumer$$.getValue();
	}

	set consumer(consumer: Consumer) {
		this.consumer$$.next(consumer);
	}

	setConsumer(consumer: Consumer) {
		this.consumer = consumer;
	}

	queue(blog: string) {
		console.log({
			blog,
			posts: this.selectedPosts()
		})
		this.consumer.queue(blog, this.selectedPosts())
			.subscribe(() => {
				this.posts = this.posts.map(post => {
					post.selected = false;
					return post;
				});
			}, console.error, console.log);
	}
}
