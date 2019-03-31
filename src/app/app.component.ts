import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {Post, Posts} from './posts';
import * as _ from 'lodash';

import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/selectable';

interface Type {
	title: string;
	value: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	quotes: string[] = [
		'"Three may keep a secret, if two of them are dead."',
		'"If you want to keep a secret, you must also hide it from yourself."',
		'"The more you leave out, the more you highlight what you leave in."',
		'"I want to be with those who know secret things or else alone."',
		'"Just do not tell Tumblr."'
	];
	quote: string = this.quotes[Math.floor(Math.random() * this.quotes.length)];
	title: string = 'Tumbless';

	types: Type[] = [{
		title: 'All',
		value: '/'
	}, {
		title: 'Photo',
		value: '/photo'
	}, {
		title: 'Video',
		value: '/video'
	}, {
		title: 'Audio',
		value: '/audio'
	}, {
		title: 'Text',
		value: '/text'
	}, {
		title: 'Quote',
		value: '/quote'
	}, {
		title: 'Link',
		value: '/link'
	}, {
		title: 'Answer',
		value: '/answer'
	}, {
		title: 'Chat',
		value: '/chat'
	}];
	type: FormControl = new FormControl('/');
	blog: FormControl = new FormControl('infered');
	posts: Post[] = [];

	constructor(private http: HttpClient) {
	}

	const
	trackByIdentity = (index: number, item: Post) => item.id;

	ngOnInit(): void {
		this.load(undefined);
		$('.post-elements').selectable({
			filter: 'div.post-element',
			selected: (event, ui) => {
				const {postId} = $(ui.selected).data();
				const p: Post = _.find(this.posts, (po: Post) => {
					return po.id === postId;
				});
				console.log(p);
				if (p.selected === undefined) {
					p.selected = false;
				}
				console.log(p);
				p.selected = !p.selected;
				console.log(p);
			},
			stop: (event, ui) => {
				console.log('hi')
				this.posts = this.posts.slice();
			}
		});
	}

	load(path: string) {
		if (path === undefined) {
			if (!/^[\dA-Za-z-]+$/.test(this.blog.value)) {
				console.error('Invalid blog name.');
				return;
			}
			this.posts = [];
			path = '/v2/blog/' + this.blog.value + '/posts' + this.type.value + '?limit=30&page_number=1';
		}
		this.http.get('https://api.tumblr.com' + path, {
			headers: new HttpHeaders({
				Authorization: 'Bearer aIcXSOoTtqrzR8L8YEIOmBeW94c3FmbSNSWAUbxsny9KKx5VFh'
			})
		})
			.subscribe((posts: Posts) => {
				this.posts = _.concat(this.posts, posts.response.posts);
			}, console.error);
	}
}
