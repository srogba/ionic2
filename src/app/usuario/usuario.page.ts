import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  users: any = [];

  constructor(
    private router: Router,
    private http: HttpClient,) { }

  ngOnInit() {

    console.log("Que tal compañeros :)");
    this.getUsers().subscribe(res => {
      console.log("respuesta", res)
      this.users = res;
    });
  }

  gotoHome() {
    this.router.navigate(['/inicio'])
  }

  getUsers() {
    return this.http
      .get("assets/archivos/conductores.json")
      .pipe(
        map((res: any) => {
          return res.data;

        })
      )
  }

}
