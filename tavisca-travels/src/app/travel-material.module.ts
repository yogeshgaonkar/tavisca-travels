import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [MatInputModule, MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatAutocompleteModule, MatFormFieldModule],
    exports: [MatInputModule, MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatAutocompleteModule, MatFormFieldModule],
})

export class TravelMaterialModule { }