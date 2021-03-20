import {Component, OnInit} from '@angular/core';
import {timeout} from 'rxjs/operators';

export interface Post {
    title: string;
    text: string;
    id?: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    posts: Post[] = [
        {title: 'Хочу выучить Angular компоненты', text: 'Я все еще учу компоненты', id: 1},
        {title: 'Следующий блок', text: 'Будет про директивы и еще про пайпы', id: 2}
    ];

    updatePosts(post: Post) {
        this.posts.unshift(post);
        console.log('Post', post);
    }

    ngOnInit(): void {
        setTimeout(()=> {
            console.log('Timeout')
            this.posts[0]={
                title: "Changed",
                text: "Changed2",
                id: 77
            }
        }, 5000)
    }
}
