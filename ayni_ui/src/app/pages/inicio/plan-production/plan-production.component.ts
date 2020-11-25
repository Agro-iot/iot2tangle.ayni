import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AyniService } from '../ayni.service';
import { Parameters, PlanProduction } from '../models';


@Component({
  selector: 'app-plan-production',
  templateUrl: './plan-production.component.html',
  styleUrls: ['./plan-production.component.scss']
})
export class PlanProductionComponent implements OnInit {

  form: FormGroup;
  listLocation: string[] = ['location01', 'location02', 'location03'];
  listSeed: string[] = ['seed01', 'seed02', 'seed03'];
  listMedium: string[] = ['medium01', 'medium02', 'medium03'];
  plan: PlanProduction;
  loaderPlan = false;
  constructor(
    private fb: FormBuilder,
    private ayniService: AyniService
  ) { }

  ngOnInit() {

    this.form = this.fb.group({
      planting_date: [new Date],
      harveting_date: [new Date],
      seed: [''],
      location: [''],
      medium: [''],
    });
  }

  calculateAvgSensors() {
    let param: Parameters = {} as Parameters;
    console.log(this.form);

    const planting_date = this.form.value['planting_date'];
    const planting_date_timestamp = Math.floor(planting_date.getTime() / 1000.0);
    param.planting_date = planting_date_timestamp;

    const harveting_date = this.form.value['harveting_date'];
    const harveting_date_timestamp = Math.floor(harveting_date.getTime() / 1000.0);
    param.harveting_date = harveting_date_timestamp;

    param.location = this.form.value['location'];
    param.medium = this.form.value['medium'];
    param.seed = this.form.value['seed'];

    console.log(param);
    this.loaderPlan = true;
    this.ayniService.calculateAvgSensors(param).subscribe(
      data => {
        this.plan = data;
        this.loaderPlan = false;
        console.log('data', data);
      },
      error => {
        this.loaderPlan = false;
        console.error(error);
      }
    )
  }

}
