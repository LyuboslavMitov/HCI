import { Injectable } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

@Injectable()
export class NotificationService {
    constructor(
        private toastr: ToastrService,
    ) { }

    public success(message: string, title?: string, override?: Partial<IndividualConfig>): void {
        this.toastr.success(message, title, override);
    }

    public info(message: string, title?: string, override?: Partial<IndividualConfig>): void {
        this.toastr.info(message, title, override);
    }

    public warning(message: string, title?: string, override?: Partial<IndividualConfig>): void {
        this.toastr.warning(message, title, override);
    }

    public error(message: string, title?: string, override?: Partial<IndividualConfig>): void {
        this.toastr.error(message, title, override);
    }
}
