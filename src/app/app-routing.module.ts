import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DrakeComponent } from "./drake/drake.component";
import { FreelanceComponent } from "./freelance/freelance.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "drake",
    component: DrakeComponent
  },
  {
    path: "freelance",
    component: FreelanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
