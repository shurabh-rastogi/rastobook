import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { SharedService } from '../services/share.service';

@Injectable()
export class RastoBookLoginGuard implements CanActivate {

    constructor(
        private sharedService: SharedService,
        private router: Router
    ) { 
        
    }

    canActivate() {
        console.log('RastoBookLoginGuard#canActivate called');
        if(this.sharedService.getSessionId() !== ''){
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}

@Injectable()
export class RastoBookLoginFailureGuard implements CanActivate {

    constructor(
        private sharedService: SharedService
    ) { 
        
    }

    canActivate() {
        console.log('RastoBookLoginFailureGuard#canActivate called');
        return (this.sharedService.getSessionId() === '');
    }
}
