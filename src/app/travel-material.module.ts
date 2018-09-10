import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
    exports: [ MatInputModule, MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule,
    MatAutocompleteModule, MatFormFieldModule, MatCardModule, MatSelectModule, MatDialogModule],
})

export class TravelMaterialModule { }
