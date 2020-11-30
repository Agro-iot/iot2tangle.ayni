import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AyniService } from '../ayni.service';
import { Parameters, PlanProduction } from '../models';

@Component({
  selector: 'app-plan-history',
  templateUrl: './plan-history.component.html',
  styleUrls: ['./plan-history.component.scss']
})
export class PlanHistoryComponent implements OnInit {

  form: FormGroup;
  listLocation: string[] = ['location01', 'location02', 'location03'];
  listSeed: string[] = ['seed01', 'seed02', 'seed03'];
  listMedium: string[] = ['medium01', 'medium02', 'medium03'];
  plan: PlanProduction;
  loaderPlan = false;
  hash:string;
  constructor(
    private fb: FormBuilder,
    private ayniService: AyniService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.hash = this.activatedRoute.snapshot.params['hash'];
    this.loaderPlan = true;
    this.ayniService.getAvgSensors(this.hash).subscribe(
      data => {
        this.loaderPlan = false;
        this.plan = data;
        this.form = this.fb.group({
          planting_date: [new Date(this.plan.parameters.planting_date)],
          harveting_date: [new Date(this.plan.parameters.harveting_date)],
          seed: [this.plan.parameters.seed],
          location: [this.plan.parameters.location],
          medium: [this.plan.parameters.medium],
        });
      }
    )

    
  }

  recordJson(loaderPlan: PlanProduction) {
    let result = [];
    for (let i in loaderPlan.sensors) {
      result.push({ 'key': i, 'value': loaderPlan.sensors[i] });
    }
    return result;
  }
}
