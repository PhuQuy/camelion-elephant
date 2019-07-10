import { Injectable, Inject } from '@angular/core';
import { Meta, Title, DOCUMENT } from '@angular/platform-browser';
import { environment } from '@env/environment';

@Injectable()
export class SeoService {

    constructor(private meta: Meta, private titleService: Title, @Inject(DOCUMENT) private doc) { }
    generateTags(config) {
        let keywords = 'phuquy, full stack developer, vietnam freelancer, responsive, mobile design, mobile app website designer, web developer, phuquy developer, Javascript outsourcing team base in Vietnam, phuquy dev, Web design and development, training included';
        config = Object.assign({
            title: 'Javascript outsourcing team base in Vietnam, Web Design, Web Development',
            description: 'Phuquy - Javascript outsourcing team base in Vietnam, specializing in full service Web design and development. Grow your business faster with 24/7 support as a service: Always on, elastic, with management and training included. Do you need a website?  We are Phuquy team, we are here for you!',
            image: environment.domain + '/assets/images/beach.jpg',
            slug: '',
            keywords:keywords
        }, config);

        if(!config.image) {
            config.image = environment.domain + '/assets/images/beach.jpg';
        }
        if(config.keywords){
            config.keywords = keywords +', '+ config.keywords;
        }
        let title = config.title +' | Phuquy ';

        this.meta.updateTag({ name: 'slug', content: config.slug });
        this.meta.updateTag({ name: 'image', content: config.image });
        this.meta.updateTag({ name: 'description', content: config.description });
        this.meta.updateTag({ name: 'keywords', content: config.keywords });
        this.meta.updateTag({ name: 'title', content: title });

        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@phuquy' });
        this.meta.updateTag({ name: 'twitter:title', content: title })
        this.meta.updateTag({ name: 'twitter:description', content: config.description });
        this.meta.updateTag({ name: 'twitter:image', content: config.image });
        // this.meta.updateTag({ name: 'twitter:url', content: config.url ? config.url : `${environment.domain}/${config.slug}`  });

        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Phuquy' });
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ property: 'og:description', content: config.description });
        this.meta.updateTag({ property: 'og:image', content: config.image });
        // this.meta.updateTag({ property: 'og:url', content: config.url ? config.url : `${environment.domain}/${config.slug}` });

        this.titleService.setTitle(title);
        this.setCanonical();

    }

    setCanonical() {
        let link: HTMLLinkElement = this.doc.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.doc.head.appendChild(link);

        let docURL = this.doc.URL;
        let url = docURL.slice(0, docURL.lastIndexOf('?') > 0 ? docURL.lastIndexOf('?') : docURL.length);

        link.setAttribute('href', url);
    }

}
