import {Injectable} from '@angular/core';
import {Consumer} from '../consumer';
import {Blog, User} from '../_type/user';
import {HttpClient} from '@angular/common/http';
import {Post} from '../_type/posts';
import {map, catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

interface UserResponse {
	data: User;
}

@Injectable({
	providedIn: 'root'
})
export class QueueSystemService implements Consumer {
	id: number = 1;

	user: User;
	getUrl: string = 'https://queuesystem.org/authenticated/getUser';
	name: string = 'Queue System';
	postUrl: string = 'https://queuesystem.org/authenticated/postSet/1/add';

	constructor(
		public httpClient: HttpClient
	) {
	}

	init(): Observable<User> {
		return this.httpClient.get<UserResponse>(this.getUrl, {
			withCredentials: true
		}).pipe(
			map(r => r.data),
			tap(u => {
				this.user = u;
			})
		);
	}

	queue(to: string, posts: Post[]): Observable<object> {
		return this.httpClient.post(this.postUrl, {
			to,
			posts
		}, {
			withCredentials: true
		});
	}
}
