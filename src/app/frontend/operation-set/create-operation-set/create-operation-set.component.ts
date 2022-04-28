import { OperationService } from './../../operation/operation.service';
import { OperationSetService } from './../operation-set.service';
import { yamlToJson, jsonToYaml } from './../../utils/index';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-create-operation-set',
  templateUrl: './create-operation-set.component.html',
  styleUrls: ['./create-operation-set.component.scss'],
})
export class CreateOperationSetComponent implements OnInit {
  id!: string;
  isEdit: boolean = false;
  title: string = 'Create';
  yamlForm = this.fb.group({
    yaml: ['', Validators.required],
  });
  column = this.fb.group({
    to: this.fb.array([]),
    operation: '',
    temp: '',
  });
  firstColumn = this.fb.group({
    to: this.fb.array([this.fb.control(1)]),
    operation: 'Start Node',
    temp: '',
  });
  dataSource = this.fb.group({
    name: ['', Validators.required],
    data: this.fb.array([this.firstColumn, this.column]),
  });
  get data() {
    return this.dataSource.get('data') as FormArray;
  }

  // dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['id', 'operation', 'to', 'operate'];
  operationList: string[] = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private operationSetService: OperationSetService,
    private operationService: OperationService,
    private _snackBar: MatSnackBar
  ) {}
  @ViewChild(MatTable) table!: MatTable<object>;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.isEdit = true;
        this.title = 'Edit';
        this.getOperationSet();
        this.getRowOperationSet();
      }
    });
    this.getOperationList();
  }
  getOperationSet() {
    this.operationSetService.getOperationSet(this.id).subscribe(data => {
      console.log(data);
      this.data.patchValue(data.adjacency);
      this.dataSource.get('name')?.patchValue(data.name);
      this.data.clear();
      data.adjacency.forEach(item => {
        if (item.id === 0) {
          item.operation = 'Start Node';
        }
        this.data.push(
          this.fb.group({
            to: this.fb.array(item.to! || []),
            operation: item.operation || 'Start Node',
            temp: '',
          })
        );
      });
    });
  }

  toIndex(i: number, currentIndex?: number) {
    return Array.from({ length: this.data.value.length }, (v, i) => i)
      .slice(i)
      .filter(item => {
        let flag = true;
        this.data.value[i - 1].to.forEach((i: number, index: number) => {
          if (index !== currentIndex) {
            if (i === item) {
              flag = false;
            }
          }
        });
        return flag;
      });
  }

  getOperationList() {
    this.operationService.getList().subscribe(data => {
      this.operationList = data.map(item => item.name);
    });
  }
  getRowOperationSet() {
    this.operationSetService
      .getRowOperationSet(this.id)
      .subscribe(async params => {
        const yaml = await jsonToYaml(params);
        this.yamlForm.setValue({ yaml: yaml });
      });
  }

  onSelectTo(i: number) {
    const value = this.data.at(i).get('temp')?.value;
    if (value) {
      (this.data.at(i).get('to') as FormArray).push(this.fb.control(value));
    }
    this.data.at(i).get('temp')?.setValue('');
  }

  delTo(val: any, i: number, j: number) {
    if (val.value === 'del') {
      (this.data.at(j).get('to') as FormArray).removeAt(i);
    }
  }

  add() {
    this.data.push(
      this.fb.group({
        to: this.fb.array([]),
        operation: '',
        temp: '',
      })
    );
    this.table.renderRows();
  }

  remove(i: number) {
    this.data.removeAt(i);
    this.table.renderRows();
  }

  onSubmit() {
    if (!this.dataSource.valid) return;
    const params = this.dataSource.value;
    if (this.isEdit) {
      this.operationSetService
        .edit(this.createReqParams(params.data, params.name))
        .subscribe(() => {
          this._snackBar.open('修改成功', 'done', {
            duration: 1000,
            verticalPosition: 'top',
          });
          this.router.navigate(['/operationSet']);
        });
    } else {
      this.operationSetService
        .create(this.createReqParams(params.data, params.name))
        .subscribe(() => {
          this._snackBar.open('创建成功', 'done', {
            duration: 1000,
            verticalPosition: 'top',
          });
          this.router.navigate(['/operationSet']);
        });
    }
  }

  createReqParams(params: any[], name: string) {
    const data = params.filter((item, i) => {
      return i === 0 || item.operation;
    });
    const adjList = data.map((item, index) => {
      delete item.temp;
      const to = item.to.filter((n: number) => n < data.length);
      if (index === 0) {
        return {
          to: to,
        };
      } else {
        return {
          id: index,
          to: to,
          operation: item.operation,
        };
      }
    });
    const result: Record<string, any> = {
      apiVersion: 'diagnosis.kubediag.org/v1',
      kind: 'OperationSet',
      metadata: {
        name,
      },
      spec: {
        adjacencyList: adjList,
      },
    };
    console.log(result);
    return result;
  }

  async submitByYaml() {
    if (!this.yamlForm.valid) return;
    const req = await yamlToJson(this.yamlForm.value.yaml);
    if (this.isEdit) {
      this.operationSetService.edit(req).subscribe(() => {
        this._snackBar.open('修改成功', 'done', {
          duration: 1000,
          verticalPosition: 'top',
        });
        this.router.navigate(['/operationSet']);
      });
    } else {
      this.operationSetService.create(req).subscribe(() => {
        this._snackBar.open('创建成功', 'done', {
          duration: 1000,
          verticalPosition: 'top',
        });
        this.router.navigate(['/operationSet']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/operationSet']);
  }
}
