import {ChangeDetectorRef, Component, HostListener, NgZone, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import {Post, Posts} from './_type/posts';
import 'jquery-ui/ui/widgets/selectable';
import {QueueService} from './_service/queue.service';
import {Consumer} from './consumer';
import {QueueSystemService} from './_service/queue-system.service';
import * as $ from 'jquery';
import {forkJoin} from 'rxjs';

interface Type {
	title: string;
	value: string;
}

interface EventTargetWithValue extends EventTarget {
	value: number;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	consumers: Consumer[] = [];
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

	queueForm: FormGroup = new FormGroup({
		blog: new FormControl()
	});

	postsForm: FormGroup = new FormGroup({
		blog: new FormControl(''),
		tag: new FormControl(''),
		type: new FormControl('/')
	});

	networking: boolean = false;

	constructor(
		private zone: NgZone,
		private changeDetectorRef: ChangeDetectorRef,
		private httpClient: HttpClient,
		public queueService: QueueService,
		private queueSystemService: QueueSystemService,
	) {
		this.consumers.push(this.queueSystemService);
	}

	trackByIdentity(index: number, item: Post) {
		return '' + item.id + item.selected;
	}

	ngOnInit(): void {
		forkJoin(this.consumers.map(c => c.init())).subscribe(() => {
			this.queueService.setConsumer(this.consumers[0]);
			this.queueForm.patchValue({
				blog: this.consumers[0].user.blogs[0].name
			});
		}, console.error);

		$('div.post-elements').selectable({
			filter: 'div.post-element',
			selected: (event: Event, ui: { selected?: Element }) => {
				this.zone.run(() => this.queueService.selectPost($(ui.selected).data('postId')));
			}
		});
	}

	@HostListener('window:scroll', [])
	onScroll(): void {
		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
			if (!this.networking && this.queueService.next) {
				this.load(this.queueService.next.href);
			}
		}
	}

	@HostListener('window:beforeunload', ['$event'])
	onBeforeUnload(event): void {
		if (this.queueService.selectedPostsCount() > 0) {
			event.returnValue = true;
		}
	}

	load(path: string) {
		if (this.networking) {
			return;
		}
		this.networking = true;
		if (path === undefined) {
			if (!/^[\dA-Za-z-]+$/.test(this.postsForm.value.blog)) {
				return;
			}
			this.queueService.clearPosts();
			path = '/v2/blog/' + this.postsForm.value.blog + '/posts' + this.postsForm.value.type + '?limit=50&page_number=1';
			if (this.postsForm.value.tag !== '') {
				path = path + '&tag=' + this.postsForm.value.tag;
			}
		}
		this.httpClient.get('https://api.tumblr.com' + path, {
			headers: new HttpHeaders({
				Authorization: 'Bearer aIcXSOoTtqrzR8L8YEIOmBeW94c3FmbSNSWAUbxsny9KKx5VFh'
			})
		})
			.subscribe((posts: Posts) => {
				for (const post of posts.response.posts) {
					post.from = post.blog_name;
					post.post_id = post.id.toString();
					this.queueService.addPost(post);
				}
				if (posts.response._links !== undefined) {
					this.queueService.next = posts.response._links.next;
				}
				this.networking = false;
			}, console.error);
	}

	selectConsumer(target: EventTargetWithValue) {
		this.queueService.setConsumer(this.consumers[target.value]);
	}
}
