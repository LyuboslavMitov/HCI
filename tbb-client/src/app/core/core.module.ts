import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
// import { AuthGuard } from './guards/auth.guard';

@NgModule({
    imports: [],
    providers: [
        { provide: AuthService, useClass: AuthService },
        // { provide: AuthGuard, useClass: AuthGuard},
    ],
})
export class CoreModule { }
