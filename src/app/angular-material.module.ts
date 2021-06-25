import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatToolbarModule } from "@angular/material/toolbar";


@NgModule ({
   
    exports: [
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatExpansionModule, 
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatDialogModule,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AngularMaterialModule {}