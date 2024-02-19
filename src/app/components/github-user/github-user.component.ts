import { Component, Input, OnInit } from '@angular/core';
import { IGithubUserProfile } from './types';
import timeoutMock from '../../../utils/timeoutMock';

@Component({
  selector: 'app-github-user',
  standalone: true,
  imports: [],
  templateUrl: './github-user.component.html',
  styleUrl: './github-user.component.css',
})
export class GithubUserComponent implements OnInit {
  @Input() userName: string = '';

  public isLoading = true;
  public name: string | undefined;
  public descripion: string | undefined;
  public avatar: string | undefined;

  ngOnInit(): void {
    this.getUserGithub();
  }

  async getUserGithub() {
    const response = await timeoutMock<IGithubUserProfile>(
      `https://api.github.com/users/${this.userName}`
    );

    this.name = response.name;
    this.descripion = response.bio;
    this.avatar = response.avatar_url;

    this.isLoading = false;
  }
}
