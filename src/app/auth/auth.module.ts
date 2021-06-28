import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../angular-material.module";
import { AuthRoutingmodule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    declarations: [LoginComponent, SignupComponent],
    imports: [ CommonModule, AngularMaterialModule, FormsModule, AuthRoutingmodule]
})
export class AuthModule {}