import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subscribable } from 'rxjs';
import { SubscribeService } from '@services/subscribe.service';


export interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  icon: string;
}


@Component({
  selector: 'foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss']
})

export class FootComponent implements OnInit {

  fullname = '';
  email = '';
  number: number;
  message = '';


  isHidden = true;

  local;
  lat: number = 10.880319;
  lng: number = 106.794486;
  icon = {
    url: '../../../assets/iocon/icon-72x72.png',
    scaledSize: {
      width: 40,
      height: 60
    }
  };

  markers: marker[] = [
    {
      lat: 10.880319,
      lng: 106.794486,
      label: 'A',
      draggable: true,
      icon: '../../../assets/icon-72x72.png',
    }
  ];
  styles = [
    {
      "featureType": "all",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "hue": "#ffb500"
        },
        {
          "lightness": "54"
        },
        {
          "saturation": "-61"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#444444"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "lightness": 45
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "color": "#46bcec"
        },
        {
          "visibility": "on"
        }
      ]
    }
  ];
  sendMessage: string = '';

  // Using NavigationEnd to catch url when router
  constructor(private router: Router, private subscribeService: SubscribeService) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (router.url === '/contact') {
          this.isHidden = false;
        } else {
          this.isHidden = true;
        }
      }
    })
  }

  // constructor () {}

  ngOnInit() {
  }

  sendInfo(formSubmit: NgForm) {
    if (formSubmit.valid) {
      this.subscribeService.create(formSubmit.value);

      this.sendMessage = "Your subscribe has sent";
    }

  }
  closeAlert(formSubmit: NgForm) {
    formSubmit.reset();
    this.sendMessage = '';
  }
}
