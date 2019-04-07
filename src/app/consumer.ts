import {Blog, User} from './_type/user';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './_type/posts';
import {Observable} from 'rxjs';

export interface Consumer {

	id: number;

	user: User;
	getUrl: string;
	name: string;
	postUrl: string;

	init(): Observable<User>;

	queue(to: string, posts: Post[]): Observable<object>;
}
