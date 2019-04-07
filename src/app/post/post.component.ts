import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../_type/posts';
import {QueueService} from '../_service/queue.service';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
	@Input() post: Post;
	constructor() {
	}

	ngOnInit() {
	}
}
