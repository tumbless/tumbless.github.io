import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../posts';
import {QueueService} from '../queue.service';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
	@Input() post: Post;

	selected: boolean = false;

	constructor(private queueService: QueueService) {
	}

	ngOnInit() {
	}

	// @HostListener('click') onClick() {
	// 	console.log(this.post.id);
	// 	this.selected = !this.selected;
	// 	if (this.selected) {
	// 		this.queueService.add(this.post);
	// 	} else {
	// 		this.queueService.remove(this.post);
	// 	}
	// }
}
