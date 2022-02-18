import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  public info(message: string, title?: string) {
    this.toastr.info(message, title);
  }

  public error(message: string, title?: string) {
    this.toastr.error(message, title);
  }

  public success(message: string, title?: string) {
    this.toastr.success(message, title);
  }

  public warn(message: string, title?: string) {
    this.toastr.warning(message, title);
  }

}
