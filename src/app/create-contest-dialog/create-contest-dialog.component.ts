import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-contest-dialog',
  templateUrl: './create-contest-dialog.component.html',
})
export class CreateContestDialogComponent {
  contestForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateContestDialogComponent>,
    private http: HttpClient
  ) {
    this.contestForm = this.fb.group({
      contestName: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      organizer: ['', Validators.required],
      // Add other form controls as needed
    });
  }

  onCreateContest() {
    if (this.contestForm.valid) {
      const contestData = {
        ACCESS_TOKEN: 'your_access_token',  // Replace with actual token
        contestName: this.contestForm.get('contestName')?.value,
        description: this.contestForm.get('description')?.value,
        startDate: this.contestForm.get('startDate')?.value,
        endDate: this.contestForm.get('endDate')?.value,
        organizer: this.contestForm.get('organizer')?.value,
        problems: [],  // Populate this with actual problems data
        maxParticipants: 100,
        status: 'upcoming'
      };

      this.http.post('your_api_endpoint_here', contestData).subscribe(response => {
        console.log('Contest created successfully:', response);
        this.dialogRef.close();
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
