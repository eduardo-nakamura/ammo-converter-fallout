import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ammo-manage',
  templateUrl: './ammo-manage.component.html',
  styleUrls: ['./ammo-manage.component.scss']
})
export class AmmoManageComponent implements OnInit {
  canalForm: FormGroup

  constructor(
    private fb: FormBuilder,

  ) {
    this.canalForm = this.fb.group({
      Name: [''],
      Code: [''],
      Id: ['']
    })
   }

  ngOnInit(): void {
  }

}
