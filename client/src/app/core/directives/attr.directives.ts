import { Directive, HostListener, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Directive({
    selector: "[scroll-attr]",
})
export class PaAttrDirective implements AfterViewInit {
    public currentCount: number = 0;
    public currentRoute: string;
    private animElement: ElementRef;
    private animAboutText: ElementRef;

    constructor(private route: Router, private elem: ElementRef, private renderer: Renderer2) { 
        this.currentRoute = this.route.url;
    }

    @HostListener('wheel', ["$event"]) scroll(e) {
        this.currentCount = this.currentCount + e.deltaY;
        let elem = e.target;
        setTimeout(()=> {
            this.currentCount = 0;
        }, 1500);
        switch(this.currentRoute) {
            case '/home':
                this.scrollOnRight('right');

                if(this.currentCount > 400) {
                    this.route.navigate(['/skills']);
                }
                break;
            case '/skills':
                this.scrollOnRight('back');
                if(this.currentCount <= -400) {
                    this.route.navigate(['/home']);
                }
                this.scrollOnRight('right');
                if(this.currentCount >= 400) {
                    this.route.navigate(['/portfolio']);
                }
                break;
            case '/portfolio':
                this.scrollOnRight('back');
                if(this.currentCount <= -400) {                   
                    this.route.navigate(['/skills']);
                }
                this.scrollOnRight('right');
                if(this.currentCount >= 400) {
                    this.route.navigate(['/home']);
                    console.log(3);
                }
            }
    }

    ngAfterViewInit() { 
        this.animElement = this.elem.nativeElement.querySelector('.content-link');
    }

    scrollOnRight(side: string):void {
        if (side === 'right') {
            if(this.currentCount >= 100) {
                setTimeout(()=> {
                    this.renderer.setStyle(this.animElement, 'height', '92%');
                }, 100);
                setTimeout(()=> {
                    this.renderer.setStyle(this.animElement, 'height', '90%');
                }, 500);
            }
            if(this.currentCount >= 200) {
                setTimeout(()=> {
                    this.renderer.setStyle(this.animElement, 'height', '94%');
                }, 100);
                setTimeout(()=> {
                    this.renderer.setStyle(this.animElement, 'height', '90%');
                }, 800);
            }
            if(this.currentCount >= 300) {
                setTimeout(()=> {
                    this.renderer.setStyle(this.animElement, 'height', '96%');
                }, 100);
                setTimeout(()=> {
                    this.renderer.setStyle(this.animElement, 'height', '90%');
                }, 900);
            }
        }
        if(side === 'back') {
            if(this.currentCount >= -100) {
                setTimeout(()=> {
                    this.renderer.setStyle(this.animElement, 'height', '88%');
                }, 100);
                setTimeout(()=> {
                    this.renderer.setStyle(this.animElement, 'height', '90%');
                }, 500);
            }
            if(this.currentCount >= -200) {
                setTimeout(()=> {
                    this.renderer.setStyle(this.animElement, 'height', '86%');
                }, 100);
                setTimeout(()=> {
                    this.renderer.setStyle(this.animElement, 'height', '90%');
                }, 800);
            }
            if(this.currentCount >= -300) {
                setTimeout(()=> {
                    this.renderer.setStyle(this.animElement, 'height', '84%');
                }, 100);
                setTimeout(()=> {
                    this.renderer.setStyle(this.animElement, 'height', '90%');
                }, 900);
            }
        }
        setTimeout(()=> {
            this.renderer.addClass(this.elem.nativeElement, 'on-animation-scorll');
        }, 100);
        setTimeout(()=> {
            this.renderer.removeClass(this.elem.nativeElement, 'on-animation-scorll');
        }, 1200);
        
    }

}