import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { TeamService } from '../team.service';
import { Member, MAX_SIZE } from '../interface';
import { MaxSizeValidator } from '@angular-material-components/file-input';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  members: Member[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.getAllTeamMembers();
  }

  /**
   * @returns meal fileForm
   */
  addTeamMemberFileForm() {
    const fileForm = new UntypedFormGroup({
      image: new UntypedFormControl('', [
        MaxSizeValidator(MAX_SIZE * 1024 * 1024),
      ]),
    });
    return fileForm as UntypedFormGroup;
  }

  /**
   * Retrieves all meals from database
   */
  getAllTeamMembers() {
    this.teamService.getAllMembers().subscribe((members) => {
      this.members = members.reverse();
      this.members.map((m) => {
        m.selected = false;
        m.displayed = true;
        m.fileForm = this.addTeamMemberFileForm();
      });
    });
  }

  /**
   * Create a team member and send it to database
   */
  createMember() {
    let m = {
      firstname: 'firstname',
      lastname: 'lastname',
      function: 'function',
      image: '',
    };
    this.teamService.createMember(m).subscribe(() => this.getAllTeamMembers());
  }

  /**
   * Delete the selected member in database
   */
  deleteMembers() {
    let toDelete$ = this.members
      .filter((m) => m.selected)
      .map((m) => {
        return this.teamService.deleteMember(m._id!);
      });
    forkJoin(toDelete$).subscribe(() => this.getAllTeamMembers());
  }

  /**
   * Update the currently selected members to the database
   */
  updateMembers() {
    let payload = cloneDeep(this.members);
    payload.map((m) => {
      if (m.fileForm.value.image) {
        m.image = m.fileForm.value.image;
      }      
      delete m.fileForm;
    });

    let toUpdate$ = payload
      .filter((m) => m.selected)
      .map((m) => {
        return this.teamService.updateMember(m);
      });
    forkJoin(toUpdate$).subscribe(() => this.getAllTeamMembers());
  }

  /**
   * Select all displayed members depending on criteria
   */
  selectAll() {
    if (this.members.filter((m) => m.displayed).every((m) => m.selected)) {
      this.members.map((m) => (m.selected = false));
    } else {
      this.members.filter((m) => m.displayed).map((m) => (m.selected = true));
    }
  }

  /**
   * Display all members who satisfies criterias
   */
  displayMembers() {
    this.members.map((m) => (m.displayed = false));
    this.members.map((m) => (m.displayed = true));
  }
}
