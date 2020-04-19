import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Post} from '../_type/posts';
import {User} from '../_type/user';
import {Consumer} from '../consumer';

@Injectable({
	providedIn: 'root'
})
export class QueueSystemService implements Consumer {
	id: number = 1;

	user: User;
	getUrl: string = 'https://followercounter.co/api/blog/';
	name: string = 'Queue System';
	postUrl: string = 'https://followercounter.co/api/blog/';

	constructor(
		public httpClient: HttpClient
	) {
	}

	init(): Observable<User> {
		return this.doQuery(this.getUrl, `query {
			blogs {
			blogId
				tumblr {
					name
				}
			}
		}`).pipe(
			tap(data => {
				this.user = {
					blogs: data.blogs
				};
			})
		)
	}

	queue(to: string, posts: Post[]): Observable<object> {
		return this.doQuery(this.postUrl, `
			mutation do($blogId: String!, $fromId: String!, $posts: [PostInput!]!) {
				addPosts(blogId: $blogId, fromId: $fromId, posts: $posts) {
					ok
				}
			}
		`, {
			blogId: to,
			fromId: posts[0]['fromId'],
			posts: posts
		});
	}

	doQuery(endpoint: string, query: string, variables: object = {}) {
		return this.httpClient.post(endpoint, {
			query, variables
		}, {
			withCredentials: true
		}).pipe(
			map((data: GraphQLResponse) => {
				if (data.errors) {
					throw new Error(data.errors[0].message);
				}
				return data.data;
			})
		);
	}
}

interface Error {
	message: string;
}

interface GraphQLResponse {
	data: any;
	errors: [Error];
}
