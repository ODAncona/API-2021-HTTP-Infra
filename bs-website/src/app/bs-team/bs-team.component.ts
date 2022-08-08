import { Component, OnInit } from '@angular/core';
import { Member } from '../interface';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-bs-team',
  templateUrl: './bs-team.component.html',
  styleUrls: ['./bs-team.component.scss'],
})
export class BsTeamComponent implements OnInit {
  workers: Member[] = [];
  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.getAllTeamMembers();
  }

  /**
   * Retrieves all workers from database
   */
  getAllTeamMembers() {
    this.teamService.getAllMembers().subscribe((members) => {
      this.workers = members.reverse();
    });
  }
}
