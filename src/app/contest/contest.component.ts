// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-contest',
//   templateUrl: './contest.component.html',
//   styleUrls: ['./contest.component.css']
// })
// export class ContestComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateContestDialogComponent } from '../create-contest-dialog/create-contest-dialog.component';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent {
  contests = [
    // Example contests, replace with actual data
    { id: 1, title: 'Contest 1', description: 'Description for contest 1' },
    { id: 2, title: 'Contest 2', description: 'Description for contest 2' }
  ];

  constructor(private dialog: MatDialog) {}

  openCreateContestDialog() {
    this.dialog.open(CreateContestDialogComponent, {
      width: '1000px', // Adjust dialog width if needed
    height: 'auto', // Adjust dialog height if needed
    });
  }
}
