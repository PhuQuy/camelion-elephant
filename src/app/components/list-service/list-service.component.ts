import { Component, OnInit, PLATFORM_ID, Inject, Input } from '@angular/core';
import { BaseComponent } from '@core/base/base.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExploreMoreComponent } from '@components/modals/explore-more/explore-more.component';

@Component({
    selector: 'app-list-service',
    templateUrl: './list-service.component.html',
    styleUrls: ['./list-service.component.scss']
})
export class ListServiceComponent extends BaseComponent implements OnInit {
    @Input() isHome: boolean= false;
    services = [
        {
            title: "Software Development",
            desscription1: "",
            desscription2: "",
            items: ["20+ software developers and architects (Angular, React, Node.js, Java, .Net, iOS, Android, Cloud, Database)", "Developed large mission critical applications in education, travel, e-commerce & retail, etc.", "Wide range of development services:"],
            tables: [
                {
                    title: "Full-Cycle Software Development",
                    details: ["Develop software applications from business ideas to deployment: requirement analysis, design, coding, testing, deployment, maintenance and supporting"]
                },
                {
                    title: "Implementation",
                    details: ["Develop software based upon an initial design", "Develop modules and components of multi-partner software development projects"]
                },
                {
                    title: "Sustaining",
                    details: ["Maintain existing software, fix bugs, develop new features, etc."]
                },
                {
                    title: "Porting & Migration",
                    details: ["Port software to different programming languages or platforms", "Migrate legacy systems to new technologies for improved performance and reduced maintenance and support costs"]
                }
            ]
        },
        {
            title: "Software Testing",
            desscription1: "",
            desscription2: "",
            items: [],
            tables: [
                {
                    title: "Full Product Verification",
                    details: ["Manage all aspects of product testing",
                        "Product quality assessment",
                        "Quality assurance consulting",
                        "Test solutions (processes and tools)"]
                },
                {
                    title: "Test Planning & Execution",
                    details: ["Functional test",
                        "Integration & system test",
                        "Performance test",
                        "Regression test",
                        "Compatibility test",
                        "Installation & upgrade test",
                        "Configuration testing",
                        "Localization test"]
                },
                {
                    title: "Test Automation",
                    details: ["Develop test automation scenarios",
                        "Custom test automation tools/solutions",
                        "Enhance test automation scenarios for regression",
                        "Execute test scripts and report test results"]
                }
            ]
        },
        {
            title: "Production Support Services",
            desscription1: "At Phuquy, we don't stop at product development services; our team can also support the software systems after launch, so our customers can focus on their core businesses:",
            desscription2: "By leveraging time zone differences, our team can support your software systems while you are sleeping or support your clients in Asia.",
            items: ["Cloud, server and application administration, configuration, maintenance and support",
                "System monitoring, optimization and reporting",
                "Remote troubleshooting and fixing",
                "Batching and enhancements",
                "Level 2/3 production support (24/7, On-call, Onsite)"],
            tables: []
        }
    ];
    constructor(@Inject(PLATFORM_ID) public platformId: string, private modalService: NgbModal) {
        super(platformId);
    }

    ngAfterViewInit() {
    }

    ngOnInit() {
    }

    openModal(i) {
        let modalRef = this.modalService.open(ExploreMoreComponent);
        modalRef.componentInstance.service = this.services[i];
    }
}
