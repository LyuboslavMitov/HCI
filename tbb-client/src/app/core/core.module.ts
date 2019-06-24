import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';
// import { AuthGuard } from './guards/auth.guard';

@NgModule({
    imports: [],
    providers: [
        { provide: AuthService, useClass: AuthService },
        { provide: NotificationService, useClass: NotificationService },
        // { provide: AuthGuard, useClass: AuthGuard},
    ],
})
export class CoreModule { }
