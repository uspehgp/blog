import {ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Post} from '../app.component';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

    @Input() post: Post;
    @ContentChild('info', {static: true}) infoRef: ElementRef;

    constructor() {
    }

    ngOnInit() {
        console.log(this.infoRef.nativeElement)
    }

}
