import {AxiosConfig} from './APIClient';

export class APIService {
    constructor(private serviceName: string, private configuration?: AxiosConfig) {
        this.serviceName = serviceName;
        this.configuration = configuration;
    }

    get name() {
        return this.serviceName;
    }

    /*
     * The Axios Configuration Object.
     */
    get axiosConfiguration() {
        return this.configuration;
    }
}

const APIMapping = {
    userService: new APIService('user-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    flowfactExporterInternalService: new APIService('flowfact-exporter-internal-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    companyService: new APIService('company-service'),
    entityService: new APIService('entity-service', {
        'axios-retry': {
            retries: 1
        }
    }),
    cognitoClientService: new APIService('cognito-client-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    schemaService: new APIService('schema-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    tagService: new APIService('tag-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    templateService: new APIService('template-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    funnelService: new APIService('funnel-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    presetService: new APIService('preset-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    activityService: new APIService('activity-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    agentRecommendationService: new APIService('agent-recommendation-service', {
        'axios-retry': {
            retries: 1
        }
    }),
    entityExportService: new APIService('entity-export-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    searchService: new APIService('search-service', {
        'axios-retry': {
            retries: 4
        }
    }),
	fullTextSearchService: new APIService('full-text-search-service', {
		'axios-retry': {
			retries: 1
		}
	}),
    formService: new APIService('form-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    componentService: new APIService('component-ui-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    geolocationService: new APIService('geolocation-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    emailService: new APIService('email-service'),
    adminTokenService: new APIService('admin-token-service'),
    viewDefinitionService: new APIService('view-definition-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    relogService: new APIService('relog-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    myFLOWFACTService: new APIService('myflowfact-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    multimediaService: new APIService('multimedia-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    interactiveExposeService: new APIService('interactive-expose-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    interactiveExposeDeliveryService: new APIService('interactive-expose-delivery-service'),
    interactiveExposeStatisticsService: new APIService('interactive-expose-statistics-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    moduleService: new APIService('module-service', {
        'axios-retry': {
            retries: 4
        }
    }),
    sampleDataService: new APIService('sampledata-service', {
        'axios-retry': {
            retries: 1
        }
    }),
    slackIntegrationService: new APIService('slack-integration-service', {
        'axios-retry': {
            retries: 1
        }
    })
};

export default APIMapping;
